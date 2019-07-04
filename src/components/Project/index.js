import React from 'react';
import styled from 'styled-components';
import { Source } from 'no-stack';

import Todos from '../Todos';
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

function Project({ project }) {

  return (
    <ProjectStyleWrapper>
      <h3>{project.value}</h3>

          return (
            <>
              <CreateTodoForm projectId={project.id} onAdd={updateSourceAfterCreateAction} />
              <Todos project = { project } />
            </>
          );
        }}
    </ProjectStyleWrapper>
  )
}

export default Project;
