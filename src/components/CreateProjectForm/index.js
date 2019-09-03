import React, { useState } from 'react';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { withNoStack, EXECUTE_ACTION } from 'no-stack';

import { CREATE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID } from '../../config';

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
  const [ projectValue, updateProjectValue ] = useState('');
  const [ loading, updateLoading ] = useState(false);

  function handleChange(e) {
    updateProjectValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!projectValue) {
      return;
    }

    updateLoading(true);

    await createProject({
      variables: {
        actionId: CREATE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: currentUser.id,
          value: projectValue,
        }),
        unrestricted: false,
      },
      update: onAdd(),
    });

    updateProjectValue('');
    updateLoading(false);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <Form>
      <label htmlFor="project-name">
        Project Name:
        <input
          id="project-name"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={projectValue}
          disabled={loading}
        />
      </label>
      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        {
          loading 
            ? 'Creating Project...'
            : 'Create Project'
        }
      </Button>
    </Form>
  );
}

export default compose(withNoStack, graphql(EXECUTE_ACTION, { name: 'createProject' }))(ProjectForm);
