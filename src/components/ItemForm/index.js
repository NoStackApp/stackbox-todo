import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { graphql, compose } from 'react-apollo';

import { EXECUTE_ACTION } from 'no-stack';

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

function ItemForm({ projectId, createItem, createIsCompleted, queryVariables }) {
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

    await createItem({
      variables: {
        // create todo action
        actionId: '93896d59-ee02-43ef-9ec5-62922e3770a8',
        executionParameters: JSON.stringify({
          parentInstanceId: projectId,
          value: itemName,
        }),
        unrestricted: false,
      },
      update: (cache, { data: { ExecuteAction } }) => {
        const data = JSON.parse(ExecuteAction);

        createIsCompleted({
          variables: {
            //create isCompleted action
            actionId: '3dbde54d-f766-4d55-b918-7621167fe032',
              executionParameters: JSON.stringify({
                parentInstanceId: data.instanceId,
                value: 'false',
              }),
              unrestricted: false, 
          },
          update: () => {
            const { sourceData } = cache.readQuery({
              query: SOURCE_QUERY,
              variables: {
                ...queryVariables,
              },
            });

            console.log(sourceData);

            const newItem = {
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
                sourceData: [ newItem, ...sourceData ],
              },
            });
          }
        });
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
