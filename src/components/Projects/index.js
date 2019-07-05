import React from 'react';
import { Source } from 'no-stack';

import CreateProjectForm from '../CreateProjectForm';
import Project from '../Project';

import { SOURCE_PROJECTSOURCE_ID } from '../../config';
import { PROJECTS_FOR_CURRENT_USER_RELATIONSHIPS, PROJECTS_FOR_CURRENT_USER_SOURCE_QUERY } from '../source-props/project';

const parameters = {};

const Projects = () => (
  <Source
    id={SOURCE_PROJECTSOURCE_ID}
    typeRelationships={PROJECTS_FOR_CURRENT_USER_RELATIONSHIPS}
    query={PROJECTS_FOR_CURRENT_USER_SOURCE_QUERY}
    parameters={parameters}
  >
    {({ loading, error, data, updateSourceAfterCreateAction, updateSourceAfterUpdateAction }) => {
      if (loading) return 'Loading...';

      if (error) return `Error: ${error.graphQLErrors}`;

      const projects = data.sourceData.map(el => el.instance);

      return (
        <>
          <CreateProjectForm onAdd={updateSourceAfterCreateAction} />
          {
            projects && projects.map(project => (
              <Project 
                key={project.id} 
                project={project}
                onUpdate={updateSourceAfterUpdateAction}
              />
            ))
          }
        </>
      );
    }}
  </Source>
);

export default Projects;
