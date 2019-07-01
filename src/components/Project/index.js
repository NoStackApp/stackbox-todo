import React from 'react';
import styled from 'styled-components';
import { Source } from 'no-stack';

import Todo from '../Todo';
import CreateTodoForm from '../CreateTodoForm';

import { SOURCE_TODOSOURCE_ID } from '../../config';
import { TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY, TODOS_FOR_CURRENT_PROJECT_RELATIONSHIPS } from '../../source-props/todo';

const ProjectStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const Todos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Project({ project }) {
  const parameters = {
    currentProjectId: project.id
  };

  return (
    <ProjectStyleWrapper>
      <h3>{project.value}</h3>
      <Source
        id={SOURCE_TODOSOURCE_ID}
        query={TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY}
        typeRelationships={TODOS_FOR_CURRENT_PROJECT_RELATIONSHIPS}
        parameters={parameters}
      >
        {({ loading, error, data, updateSourceAfterCreateAction, updateSourceAfterUpdateAction}) => {
          if (loading) return 'Loading...';

          if (error) return `Error: ${error.graphQLErrors}`;

          const todos = data.sourceData.map(el => ({
            ...el.instance,
            isCompleted: el.children[0].instance,
          }));

          return (
            <>
              <CreateTodoForm projectId={project.id} onAdd={updateSourceAfterCreateAction} />
              <Todos>
                {todos.map(todo => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    name={todo.value}
                    isCompleted={todo.isCompleted}
                    onUpdate={updateSourceAfterUpdateAction}
                  />
                ))}
              </Todos>
            </>
          );
        }}
      </Source>
    </ProjectStyleWrapper>
  )
}

export default Project;
