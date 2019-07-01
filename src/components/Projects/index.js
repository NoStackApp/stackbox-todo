import React from 'react';
import { Source } from 'no-stack';
import gql from 'graphql-tag';

import CreateProjectForm from '../CreateProjectForm';
import Project from '../Project';

import { SOURCE_PROJECTSOURCE_ID, TYPE_PROJECT_ID } from '../../config';

const typeRelationships = {
  [TYPE_PROJECT_ID]: null,
};

const parameters = {};

const SOURCE_QUERY = gql`
  query SOURCE(
    $id: ID!
    $typeRelationships: String!
    $parameters: String
  ) {
    sourceData(
      sourceId: $id
      typeRelationships: $typeRelationships
      parameters: $parameters
    ) {
      instance {
        id
        value
      }
    }
  }
`;

const Projects = () => (
  <Source
    id={SOURCE_PROJECTSOURCE_ID}
    typeRelationships={typeRelationships}
    query={SOURCE_QUERY}
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
