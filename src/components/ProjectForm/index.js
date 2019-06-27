import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { withNoStack, EXECUTE_ACTION } from 'no-stack';

import { CREATE_PROJECT_FOR_USER_ACTION_ID } from '../../config';

const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  margin-left: 1em;
`;

function ProjectForm({ createProject, currentUser, onAdd }) {
  const [ projectName, updateProjectName ] = useState('');

  const id = v4();
  const inputFieldId = `item-name-field-${id}`;

  function handleChange(e) {
    updateProjectName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!projectName) {
      return;
    }

    await createProject({
      variables: {
        // Create Project action
        actionId: CREATE_PROJECT_FOR_USER_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: currentUser.id,
          value: projectName,
        }),
        unrestricted: false,
      },
      update: onAdd,
    });
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <Form>
      <label htmlFor={inputFieldId}>
        Project Name:
        <input
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={projectName} />
      </label>
      <Button type="submit" onClick={handleSubmit}>Create Project</Button>
    </Form>
  );
}

export default compose(withNoStack, graphql(EXECUTE_ACTION, { name: 'createProject' }))(ProjectForm);
