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

const sourceId = 'collection_platform_TestStack94_collection_user_Collection_source_toDoSource';
const typeHierarchy = {
  'tree_source_collection_platform_TestStack94_collection_user_Collection_source_toDoSource_tree_toDoSource_Tree_type_toDo': null, 
};
const unrestricted = false;

function Project({ project, onItemDelete }) {
  const parameters = {
    currentProjectId: project.id
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

          const items = data.sourceData.map(el => el.instance);

          return (
            <>
              <ItemForm projectId={project.id} queryVariables={{
                id: sourceId,
                typeHierarchy: JSON.stringify(typeHierarchy),
                unrestricted,
                parameters: JSON.stringify(parameters),
              }}/>
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
            </>
          );
        }}
      </Source>
    </Wrapper>
  )
}

export default Project;
