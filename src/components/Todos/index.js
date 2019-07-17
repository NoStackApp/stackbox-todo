import React from 'react';
import styled from 'styled-components';
import { Source } from 'no-stack';

import Todo from '../Todo';
import CreateTodoForm from '../CreateTodoForm';

import {SOURCE_TODOSOURCE_ID} from "../../config";
import {TODOS_FOR_CURRENT_PROJECT_RELATIONSHIPS, TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY} from "../source-props/todo";

const TodoListStyleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Todos({ projectId }) {
  const parameters = {
    currentProjectId: projectId,
  };

  return (
    <Source
      id={SOURCE_TODOSOURCE_ID}
      query={TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY}
      typeRelationships={TODOS_FOR_CURRENT_PROJECT_RELATIONSHIPS}
      parameters={parameters}
    >
      {({loading, error, data, updateSourceAfterCreateAction, updateSourceAfterUpdateAction, refetchQueries }) => {
        if (loading) return 'Loading...';

        if (error) return `Error: ${error.graphQLErrors}`;

        const todos = data.sourceData.map(el => ({
          ...el.instance,
          isCompleteds: el.children,
        }));

        return (
          <>
            <CreateTodoForm projectId={projectId} onAdd={updateSourceAfterCreateAction} />
            <TodoListStyleWrapper>
              {
                todos && todos.map(todo => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    // isCompleted={todo.isCompleted}
                    onUpdate={updateSourceAfterUpdateAction}
                    refetchQueries={refetchQueries}
                  />
                ))
              }
            </TodoListStyleWrapper>
          </>
        );
      }}
    </Source>
  );
}


export default Todos;
