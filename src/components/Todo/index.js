import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import { UPDATE_TO_DO_FOR_TO_DO_SOURCE_ACTION_ID, DELETE_TO_DO_FOR_TO_DO_SOURCE_ACTION_ID } from '../../config';
import { TODO_FRAGMENT } from '../source-props/fragments';

import IsCompleted from '../IsCompleted';

const TodoStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
  opacity: ${props => props.isDeleting ? 0.2 : 1.0};
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

const DeleteMenu = styled.div`
  color: red;
  margin: 1em;
  padding: 1em;
  border: 1px solid #eeeeee;
`;

function Todo({ todo, projectId, isCompleted, updateInstance, deleteInstance, onUpdate, onDelete }) {
  const [ todoValue, updateTodoValue ] = useState(todo.value);
  const [ isEditMode, updateIsEditMode ] = useState(false);
  const [ isSaving, updateIsSaving ] = useState(false);
  const [ isDeleteMode, updateIsDeleteMode ] = useState(false);
  const [ isDeleting, updateIsDeleting ] = useState(false);

  function handleTodoValueChange(e) {
    updateTodoValue(e.target.value);
  }

  async function handleTodoValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_TO_DO_FOR_TO_DO_SOURCE_ACTION_ID,
        executionParameters: JSON.stringify({
          value: todoValue,
          instanceId: todo.id,
        }),
      },
      update: onUpdate(todo.id, TODO_FRAGMENT),
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }

  async function handleDelete() {
    updateIsDeleting(true); 

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_TO_DO_FOR_TO_DO_SOURCE_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: projectId,
            instanceId: todo.id,
          }),
        },
        update: onDelete(todo.id),
      });
    } catch (e) {
      updateIsDeleting(false);
    }
  }

  return (
    <TodoStyleWrapper isDeleting={isDeleting}>
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
            {isDeleteMode ?
              (
                <DeleteMenu>
                  Delete?
                  <Button
                    type="button"
                    hoverColor="#00FF00"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    &#10003;
                  </Button>
                  <Button
                    type="button"
                    hoverColor="#FF0000"
                    onClick={() => updateIsDeleteMode(false)}
                    disabled={isDeleting}
                  >
                    &#10005;
                  </Button>
                </DeleteMenu>
              ) :
              (
                <>
                  <Button
                    type="button"
                    onClick={() => updateIsEditMode(true)}
                  >
                    &#9998;
                  </Button>
                  <Button
                    type="button"
                    onClick={() => updateIsDeleteMode(true)}
                  >
                    &#128465;
                  </Button>
                  <IsCompleted
                    isCompleted={isCompleted}
                    label="Done?"
                    onUpdate={onUpdate}
                  />
                </>
              )
            }
          </>
        )
      }
    </TodoStyleWrapper>
  );
}

export default compose(
  graphql(EXECUTE_ACTION, { name: 'updateInstance' }),
  graphql(EXECUTE_ACTION, { name: 'deleteInstance' })
)(Todo);
