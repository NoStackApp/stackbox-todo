import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

import { UPDATE_TODO_ACTION_ID, UPDATE_ISCOMPLETED_ACTION_ID } from '../../config';
import { TODO_FRAGMENT, IS_COMPLETED_FRAGMENT } from '../Project/fragments';

const Wrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const DoneItemDiv = styled.div`
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

function Item({ id, name, isCompleted, updateInstance }) {
  const [ itemName, updateItemName ] = useState(name);

  function handleItemNameChange(e) {
    updateItemName(e.target.value);
  }

  async function handleItemNameSave() {
    await updateInstance({
      variables: {
        actionId: UPDATE_TODO_ACTION_ID,
        executionParameters: JSON.stringify({
          value: itemName,
          instanceId: id,
        }),
        update: (cache, { data: ExecuteAction }) => {
          const data = JSON.parse(ExecuteAction);

          cache.writeFragment({
            id,
            fragment: TODO_FRAGMENT,
            data: {
              id,
              value: data.value,
              __typename: 'Instance',
            },
          });
        },
      },
    })
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleItemNameSave();
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
      update: (cache, { data: { ExecuteAction } }) => {
        const data = JSON.parse(ExecuteAction);

        cache.writeFragment({
          id: isCompleted.id,
          fragment: IS_COMPLETED_FRAGMENT,
          data: {
            id: isCompleted.id,
            value: data.value,
            __typename: "Instance",
          },
        });
      }
    });
  }

  const inputFieldId = `item-name-${id}`

  return (
    <Wrapper>
      <div>
        {isCompleted.value === 'true' ?
          (
            <DoneItemDiv onClick={() => handleUpdateCompletion('false')}>
              {itemName}
            </DoneItemDiv>
          ) :
          (
            <div>
              <label htmlFor={inputFieldId}>
                Item Name:
                <input
                  id={inputFieldId}
                  type="text"
                  value={itemName}
                  onChange={handleItemNameChange}
                  onBlur={handleItemNameSave}
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
    </Wrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(Item);
