import React from 'react';
import styled from 'styled-components';

import Todos from '../Todos';

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
      <Todos projectId={project.id} />
    </ProjectStyleWrapper>
  );
}

export default Project;
