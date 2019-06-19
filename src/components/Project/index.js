import React from 'react';
import styled from 'styled-components';
import { Source } from 'no-stack';

import Item from '../Item';
import ItemForm from '../ItemForm';
import SOURCE_QUERY from '../SourceQuery';

const Wrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const sourceId = '63485e99-39c0-4241-9796-7288cd5b7f44';
const typeHierarchy = {
  'todo-item': {},
};
const unrestricted = false;

function Project({ project, onItemDelete }) {
  const parameters = {
    projectId: project.id
  };

  return (
    <Wrapper>
      <h3>{project.value}</h3>
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

          console.log(data);

          const items = data.sourceData.map(el => el.instance);

          return (
            <Items>
              {items.map(item => (
                <Item 
                  key={item.id}
                  id={item.id}
                  done={item.done}
                  name={item.value}
                />
              ))}
            </Items>
          );
        }}
      </Source>
    </Wrapper>
  )
}

export default Project;
