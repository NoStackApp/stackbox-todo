import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';

import { CREATE_ISCOMPLETED_FOR_TODO_ACTION_ID } from '../../config';
import { TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY } from '../source-props/todo';

const Form = styled.div`
  padding: 1em;
  margin: 1.5em;
  background-color: #F5F5F5;
  border-radius: 3px;
`;

const Button = styled.button``;

function CreateIsCompletedForm({ createIsCompleted, currentTodoId, sourceQueryVariables }) {
  const [ isCompletedName, updateIsCompletedName ] = useState('');

  function handleChange(e) {
    updateIsCompletedName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isCompletedName) {
      return;
    }

    await createIsCompleted({
      variables: {
        actionId: CREATE_ISCOMPLETED_FOR_TODO_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: currentTodoId,
          value: isCompletedName,
        }),
        unrestricted: false,
      },
      refetchQueries: [
        {
          query: TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY,
          variables: sourceQueryVariables,
        },
      ]
    })
  }

  return (
    <Form>
      <label htmlFor="is-completed-name">
        IsCompleted Name:
        <input
          id="is-completed-name"
          type="text"
          onChange={handleChange}
          value={isCompletedName} />
      </label>
      <Button type="submit" onClick={handleSubmit}>Add IsCompleted</Button>
    </Form>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'createIsCompleted' })(CreateIsCompletedForm);
