import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { withNoStack, EXECUTE_ACTION } from 'no-stack';

import SOURCE_QUERY from '../SourceQuery.js';

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

function ProjectForm({ createProject, currentUser, queryVariables }) {
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
        actionId: 'c6042931-4afb-4504-9b9b-9e0156320d40',
        executionParameters: JSON.stringify({
          parentInstanceId: currentUser.id,
          value: projectName,
        }),
        unrestricted: false,
      },
      update: (cache, { data: { ExecuteAction } }) => {
        const data = JSON.parse(ExecuteAction);

        const { sourceData } = cache.readQuery({ 
          query: SOURCE_QUERY,
          variables: {
            ...queryVariables,
          },
        });

        const newProject = {
          instance: {
            id: data.instanceId,
            value: data.value,
            __typename: 'Instance',
          },
          __typename: 'InstanceWithChildren',
        };

        cache.writeQuery({
          query: SOURCE_QUERY,
          variables: {
            ...queryVariables,
          },
          data: {
            sourceData: [ newProject, ...sourceData ],
          },
        });
      }
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
