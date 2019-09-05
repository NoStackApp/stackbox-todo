import React, { useState } from 'react';
import styled from 'styled-components';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import { EXECUTE_ACTION } from '@nostack/no-stack';

import { CREATE_TO_DO_FOR_TO_DO_SOURCE_ACTION_ID, CREATE_IS_COMPLETED_FOR_TO_DO_SOURCE_ACTION_ID } from '../../config';

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

function CreateTodoForm({ projectId, createTodo, createIsCompleted, onAdd }) {
  const [ todoValue, updateTodoValue ] = useState('');
  const [ loading, updateLoading ] = useState(false);

  function handleChange(e) {
    updateTodoValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!todoValue) {
      return;
    }

    updateLoading(true);

    const createTodoResponse = await createTodo({
      variables: {
        actionId: CREATE_TO_DO_FOR_TO_DO_SOURCE_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: projectId,
          value: todoValue,
        }),
        unrestricted: false,
      },
    });

    const newTodoData = JSON.parse(createTodoResponse.data.ExecuteAction);

    await createIsCompleted({
      variables: {
        actionId: CREATE_IS_COMPLETED_FOR_TO_DO_SOURCE_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: newTodoData.instanceId,
          value: 'false',
        }),
        unrestricted: false,
      },
      update: (cache, response) => {
        const isCompletedData = JSON.parse(response.data.ExecuteAction);

        const newTodo = {
          instance: {
            id: newTodoData.instanceId,
            value: newTodoData.value,
            __typename: 'Instance',
          },
          children: [
            {
              instance: {
                id: isCompletedData.instanceId,
                value: isCompletedData.value,
                __typename: 'Instance',
              },
              __typename: 'InstanceWithChildren',
            },
          ],
          __typename: 'InstanceWithChildren',
        };

        onAdd(newTodo)(cache);
      },
    });

    updateTodoValue('');
    updateLoading(false);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <Form>
      <label htmlFor='todo-name'>
        Todo Value:
        <input
          id='todo-name'
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={todoValue}
          disabled={loading}
        />
      </label>
      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        {
          loading
            ? 'Adding Todo...'
            : 'Add Todo'
        }
      </Button>
    </Form>
  );
}

export default compose(
  graphql(EXECUTE_ACTION, { name: 'createTodo' }),
  graphql(EXECUTE_ACTION, { name: 'createIsCompleted' }),
)(CreateTodoForm);
