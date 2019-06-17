import React, { useState } from 'react';
import styled from 'styled-components';
import { Source } from 'no-stack';

import SOURCE_QUERY from '../SourceQuery';

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

const sourceId = '00af5e79-199c-4f3b-a6ef-99e9d5ed6403';
const typeHierarchy = {
  'todo-item': null,
};

const unrestricted = false;

function Item({ id, name, done, onDelete }) {
  const [ itemName, updateItemName ] = useState(name);
  const [ itemDone, updateItemDone ] = useState(done);

  function handleChange(e) {
    updateItemName(e.target.value);
  }

  function handleKeyPress(e) {
    console.log(e.charCode);
  }

  function handleItemClick() {
    updateItemDone(!itemDone);
  }

  function handleDelete() {
    onDelete(id);
  }

  const inputFieldId = `item-name-${id}`

  const DeleteButton = () => (
    <Button
      type="button"
      onClick={handleDelete}
    >
      Remove
    </Button>
  );

  const parameters = {
    itemId: id,
  };

  return (
    <Wrapper>
      <div>
        <Source
          id={sourceId}
          typeHierarchy={typeHierarchy}
          query={SOURCE_QUERY}
          unrestricted={unrestricted}
          parameters={parameters}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';

            if (error) return `Error: ${error.graphQLErrors}`;

            const isCompleted = data.sourceData.length ? data.sourceData[0].instance.value : false;

            if (isCompleted) {
              return (
                <DoneItemDiv onClick={handleItemClick}>
                  {itemName}
                  <DeleteButton />
                </DoneItemDiv>
              ); 
            }

            return (
              <div>
                <label htmlFor={inputFieldId}>
                  Item Name:{' '}
                  <input
                    id={inputFieldId}
                    type="text"
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    value={itemName}
                  />
                  <Button type="button" onClick={handleItemClick}>
                    Done
                  </Button>
                  <DeleteButton />
                </label>
              </div>
            );
          }}
        </Source>
      </div>
    </Wrapper>
  );
}

export default Item;
