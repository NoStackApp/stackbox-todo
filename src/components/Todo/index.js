import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

import { UPDATE_TODO_ACTION_ID, UPDATE_ISCOMPLETED_ACTION_ID } from '../../config';
import { TODO_FRAGMENT, IS_COMPLETED_FRAGMENT } from '../source-props/fragments';

import IsCompleted from '../IsCompleted';

const TodoStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

function Todo({ todo, isCompleted, updateInstance, onUpdate }) {
  const [ todoValue, updateTodoValue ] = useState(todo.value);
  const [ isEditMode, updateIsEditMode ] = useState(false);
  const [ isSaving, updateIsSaving ] = useState(false);

  function handleTodoValueChange(e) {
    updateTodoValue(e.target.value);
  }

  async function handleTodoValueSave() {
    updateIsSaving(true);
    
    await updateInstance({
      variables: {
        actionId: UPDATE_TODO_ACTION_ID,
        executionParameters: JSON.stringify({
          value: todoValue,
          instanceId: todo.id,
        }),
        update: onUpdate(todo.id, TODO_FRAGMENT),
      },
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }

  async function handleUpdateCompletion() {
    const value = isCompleted.value === 'true' ? 'false' : 'true';

    await updateInstance({
      variables: {
        actionId: UPDATE_ISCOMPLETED_ACTION_ID,
        executionParameters: JSON.stringify({
          value,
          instanceId: isCompleted.id,
        }),
        unrestricted: false,
      },
      optimisticResponse: {
        ExecuteAction: JSON.stringify({
          id: isCompleted.id,
          value,
        }),
      },
      update: onUpdate(isCompleted.id, IS_COMPLETED_FRAGMENT),
    });
  }

  return (
    <TodoStyleWrapper>
      <div>
        {isEditMode ?
          (
            <>
              <label htmlFor={todo.id}>
                Todo Value:
                <input
                  id={todo.id}
                  type="text"
                  value={todoValue}
                  onChange={handleTodoValueChange}
                  disabled={isSaving}
                />
              </label>
              <button
                type="button"
                onClick={handleTodoValueSave}
                disabled={isSaving}
              >
                &#10003;
              </button>
              <button
                type="button"
                onClick={() => updateIsEditMode(false)}
                disabled={isSaving}
              >
                &#10005;
              </button>
            </>
          ) :
          (
            <>
              {todoValue}
              <button
                type="button"
                onClick={() => updateIsEditMode(true)}
              >
                &#9998;
              </button>
            </>
          )
        }
      </div>
      <div>
        <IsCompleted
          isCompleted={isCompleted}
          label="Done?" 
          onChange={handleUpdateCompletion}
        />
      </div>
    </TodoStyleWrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(Todo);
