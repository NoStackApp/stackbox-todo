import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

import { UPDATE_TODO_ACTION_ID, UPDATE_ISCOMPLETED_ACTION_ID } from '../../config';
import { TODO_FRAGMENT, IS_COMPLETED_FRAGMENT } from '../Project/fragments';

const TodoStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const DoneTodoDiv = styled.div`
  background-color: #FF6347;
  font-weight: bold;
  padding: 1.5em;
  margin: 1.5em auto;
  text-decoration: line-through;
  cursor: pointer;
  max-width: 200px;
`;

const Button = styled.button`
  margin-left: 1em;
`;

function Todo({ id, name, isCompleted, updateInstance, onUpdate }) {
  const [ todoName, updateTodoName ] = useState(name);

  function handleTodoNameChange(e) {
    updateTodoName(e.target.value);
  }

  async function handleTodoNameSave() {
    await updateInstance({
      variables: {
        actionId: UPDATE_TODO_ACTION_ID,
        executionParameters: JSON.stringify({
          value: todoName,
          instanceId: id,
        }),
        update: onUpdate(id, TODO_FRAGMENT),
      },
    })
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleTodoNameSave();
    }
  }

  async function handleUpdateCompletion(completed) {
    await updateInstance({
      variables: {
        actionId: UPDATE_ISCOMPLETED_ACTION_ID,
        executionParameters: JSON.stringify({
          value: completed,
          instanceId: isCompleted.id,
        }),
        unrestricted: false,
      },
      optimisticResponse: {
        ExecuteAction: JSON.stringify({
          id: isCompleted.id,
          value: completed,
        })
      },
      update: onUpdate(isCompleted.id, IS_COMPLETED_FRAGMENT),
    });
  }

  const inputFieldId = `todo-name-${id}`

  return (
    <TodoStyleWrapper>
      <div>
        {isCompleted.value === 'true' ?
          (
            <DoneTodoDiv onClick={() => handleUpdateCompletion('false')}>
              {todoName}
            </DoneTodoDiv>
          ) :
          (
            <div>
              <label htmlFor={inputFieldId}>
                Todo Name:
                <input
                  id={inputFieldId}
                  type="text"
                  value={todoName}
                  onChange={handleTodoNameChange}
                  onBlur={handleTodoNameSave}
                  onKeyDown={handleKeyDown}
                />
                <Button type="button" onClick={() => handleUpdateCompletion('true')}>
                  Mark as Done
                </Button>
              </label>
            </div>
          )
        }
      </div>
    </TodoStyleWrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(Todo);
