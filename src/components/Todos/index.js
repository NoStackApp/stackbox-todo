import React from 'react';
import styled from 'styled-components';
import { Source } from 'no-stack';

import Todo from '../Todo';
import CreateTodoForm from '../CreateTodoForm';

import {SOURCE_TODOSOURCE_ID} from "../../config";
import {TODOS_FOR_CURRENT_PROJECT_RELATIONSHIPS, TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY} from "../../source-props/todo";

const StyleWrapper = styled.div`
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
            {({loading, error, data, updateSourceAfterCreateAction, updateSourceAfterUpdateAction}) => {
                if (loading) return 'Loading...';

                if (error) return `Error: ${error.graphQLErrors}`;

                const todos = data.sourceData.map(el => ({
                    ...el.instance,
                    isCompleted: el.children[0].instance,
                }));

                return (
                    <StyleWrapper>
                        <CreateTodoForm projectId={projectId} onAdd={updateSourceAfterCreateAction} />
                        {todos && todos.map(todo => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                name={todo.value}
                                isCompleted={todo.isCompleted}
                                onUpdate={updateSourceAfterUpdateAction}
                            />
                        ))}
                    </StyleWrapper>
                );
            }}
        </Source>
    );
}


export default Todos;

