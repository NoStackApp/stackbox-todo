import React from 'react';
import { Unit } from '@nostack/no-stack';
import styled from 'styled-components';

import CreateProjectForm from '../CreateProjectForm';
import Project from '../Project';

import { SOURCE_PROJECT_SOURCE_ID } from '../../config';
import { PROJECTS_FOR_CURRENT_USER_RELATIONSHIPS, PROJECTS_FOR_CURRENT_USER_SOURCE_QUERY } from '../source-props/project';

const ProjectsStyleWrapper = styled.div`
  input {
    margin: 0 0.5em;
  }

  button {
    margin: 0 0.5em;
  }
`;

const parameters = {};

const Projects = ({ currentUserId }) => (
  <Unit
    id={SOURCE_PROJECT_SOURCE_ID}
    typeRelationships={PROJECTS_FOR_CURRENT_USER_RELATIONSHIPS}
    query={PROJECTS_FOR_CURRENT_USER_SOURCE_QUERY}
    parameters={parameters}
  >
    {({ loading, error, data, updateUnitAfterCreateAction, updateUnitAfterUpdateAction, updateUnitAfterDeleteAction }) => {
      if (loading) return 'Loading...';

      if (error) return `Error: ${error.graphQLErrors}`;

      const projects = data.unitData.map(el => el.instance);

      return (
        <ProjectsStyleWrapper>
          <CreateProjectForm onAdd={updateUnitAfterCreateAction} />
          {
            projects && projects.map(project => (
              <Project
                key={project.id}
                project={project}
                currentUserId={currentUserId}
                onUpdate={updateUnitAfterUpdateAction}
                onDelete={updateUnitAfterDeleteAction}
              />
            ))
          }
        </ProjectsStyleWrapper>
      );
    }}
  </Unit>
);

export default Projects;
