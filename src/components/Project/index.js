import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Source } from 'no-stack';

import Item from '../Item';
import ItemForm from '../ItemForm';

import { SOURCE_TODOSOURCE_ID, TYPE_TODO_ID, TYPE_ISCOMPLETED_ID } from '../../config';
import { TODO_FRAGMENT, IS_COMPLETED_FRAGMENT } from './fragments';

const TODO_QUERY = gql`
  query SOURCE(
    $id: ID!
    $typeHierarchy: String!
    $unrestricted: Boolean!
    $parameters: String
  ) {
    sourceData(
      sourceId: $id
      typeHierarchy: $typeHierarchy
      unrestricted: $unrestricted
      parameters: $parameters
    ) {
      instance {
        ...TodoParts
      }
      children {
        instance {
          ...IsCompletedParts
        }
      }
    }
  }

  ${TODO_FRAGMENT}
  ${IS_COMPLETED_FRAGMENT}
`;

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

const typeHierarchy = {
  [TYPE_TODO_ID]: {
    [TYPE_ISCOMPLETED_ID]: null,
  },
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
        id={SOURCE_TODOSOURCE_ID}
        typeHierarchy={typeHierarchy}
        query={TODO_QUERY}
        unrestricted={unrestricted}
        parameters={parameters}
      >
        {({ loading, error, data, updateSourceAfterCreateAction, updateSourceAfterUpdateAction}) => {
          if (loading) return 'Loading...';

          if (error) return `Error: ${error.graphQLErrors}`;

          const items = data.sourceData.map(el => ({
            ...el.instance,
            isCompleted: el.children[0].instance,
          }));

          return (
            <>
              <ItemForm projectId={project.id} onAdd={updateSourceAfterCreateAction} />
              <Items>
                {items.map(item => (
                  <Item 
                    key={item.id}
                    id={item.id}
                    name={item.value}
                    isCompleted={item.isCompleted}
                    onUpdate={updateSourceAfterUpdateAction}
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
