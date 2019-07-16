import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

import { UPDATE_TODO_ACTION_ID, } from '../../config';
import { TODO_FRAGMENT } from '../source-props/fragments';

import IsCompleteds from '../IsCompleteds';

const TodoStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hoverColor || '#000000'};
  }
`;

function Todo({ todo, updateInstance, onUpdate, sourceQueryVariables }) {
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

  return (
    <TodoStyleWrapper>
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
            <Button
              type="button"
              hoverColor="#00FF00"
              onClick={handleTodoValueSave}
              disabled={isSaving}
            >
              &#10003;
            </Button>
            <Button
              type="button"
              hoverColor="#FF0000"
              onClick={() => updateIsEditMode(false)}
              disabled={isSaving}
            >
              &#10005;
            </Button>
          </>
        ) :
        (
          <>
            {todoValue}
            <Button
              type="button"
              onClick={() => updateIsEditMode(true)}
            >
              &#9998;
            </Button>
            <IsCompleteds 
              currentTodoId={todo.id}
              isCompleteds={todo.isCompleteds}
              sourceQueryVariables={sourceQueryVariables}
              onUpdate={onUpdate}
            />
          </>
        )
      }
    </TodoStyleWrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(Todo);
