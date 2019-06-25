import React, { useState } from 'react';
import styled from 'styled-components';
import { Source, EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

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

const sourceId = 'collection_platform_TestStack94_collection_user_Collection_source_isCompletedSource';
const typeHierarchy = {
  'tree_source_collection_platform_TestStack94_collection_user_Collection_source_isCompletedSource_tree_isCompletedSource_Tree_type_isCompleted': null,
};

const unrestricted = false;

function Item({ id, name, updateIsCompleted }) {
  const [ itemName, updateItemName ] = useState(name);

  function handleChange(e) {
    // updateItemName(e.target.value);
  }

  function handleKeyPress(e) {
    console.log(e.charCode);
  }

  function handleItemClick() {

  }

  function handleDone(id) {
    console.log(id);
  }

  // function handleDelete() {
  //   onDelete(id);
  // }

  const inputFieldId = `item-name-${id}`

  // const DeleteButton = () => (
  //   <Button
  //     type="button"
  //     onClick={handleDelete}
  //   >
  //     Remove
  //   </Button>
  // );

  const parameters = {
    currentToDoId: id,
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

            const isCompleted = data.sourceData.length > 0 && data.sourceData[0].instance.value === 'true';

            if (isCompleted) {
              return (
                <DoneItemDiv onClick={handleItemClick}>
                  {itemName}
                </DoneItemDiv>
              );
            }

            return (
              <div>
                <label htmlFor={inputFieldId}>
                  Item Name:
                  <input
                    id={inputFieldId}
                    type="text"
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    value={itemName}
                  />
                  <Button type="button" onClick={() => handleDone(data.sourceData[0].instance.id)}>
                    Done
                  </Button>
                </label>
              </div>
            );
          }}
        </Source>
      </div>
    </Wrapper>
  );
}

export default graphql(EXECUTE_ACTION, 'updateIsCompleted')(Item);
