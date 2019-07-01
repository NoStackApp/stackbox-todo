import React from 'react';
import { Source } from 'no-stack';
import gql from 'graphql-tag';

import CreateProjectForm from '../CreateProjectForm';
import Project from '../Project';

import { SOURCE_PROJECTSOURCE_ID, TYPE_PROJECT_ID } from '../../config';

const SOURCE_QUERY = gql`
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
        id
        value
      }
    }
  }
`;

const typeHierarchy = {
  [TYPE_PROJECT_ID]: null,
};

const unrestricted = false;
const parameters = {};

const Projects = () => (
  <Source
    id={SOURCE_PROJECTSOURCE_ID}
    typeHierarchy={typeHierarchy}
    query={SOURCE_QUERY}
    unrestricted={unrestricted}
    parameters={parameters}
  >
    {({ loading, error, data, updateSourceAfterCreateAction }) => {
      if (loading) return 'Loading...';

      if (error) return `Error: ${error.graphQLErrors}`;

      const projects = data.sourceData.map(el => el.instance);

      return (
        <>
          <CreateProjectForm onAdd={updateSourceAfterCreateAction} />
          {
            projects && projects.map(project => (
              <Project key={project.id} project={project} />
            ))
          }
        </>
      );
    }}
  </Source>
);

export default Projects;
