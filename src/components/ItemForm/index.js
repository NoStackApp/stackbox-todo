import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { graphql, compose } from 'react-apollo';

import { EXECUTE_ACTION } from 'no-stack';

import { CREATE_TODO_FOR_PROJECT_ACTION_ID, CREATE_ISCOMPLETED_FOR_TODO_ACTION_ID } from '../../config';

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

function ItemForm({ projectId, createItem, createIsCompleted, onAdd }) {
  const [ itemName, updateItemName ] = useState('');

  const id = v4();
  const inputFieldId = `item-name-field-${id}`;

  function handleChange(e) {
    updateItemName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) {
      return;
    }

    const createItemResponse = await createItem({
      variables: {
        actionId: CREATE_TODO_FOR_PROJECT_ACTION_ID, 
        executionParameters: JSON.stringify({
          parentInstanceId: projectId,
          value: itemName,
        }),
        unrestricted: false,
      },
    });

    const newItemData = JSON.parse(createItemResponse.data.ExecuteAction);

    await createIsCompleted({
      variables: {
        actionId: CREATE_ISCOMPLETED_FOR_TODO_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: newItemData.instanceId,
          value: 'false',
        }),
        unrestricted: false,
      },
      update: (cache, response) => {
        const isCompletedData = JSON.parse(response.data.ExecuteAction);

        const newItem = {
          instance: {
            id: newItemData.instanceId,
            value: newItemData.value,
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

        onAdd(newItem)(cache);
      },
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
        Item Name:{' '}
        <input 
          id={inputFieldId}
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={itemName} />
      </label>
      <Button type="submit" onClick={handleSubmit}>Add Item</Button>
    </Form>
  );
}

export default compose(
  graphql(EXECUTE_ACTION, { name: 'createItem' }),
  graphql(EXECUTE_ACTION, { name: 'createIsCompleted' }),
)(ItemForm);
