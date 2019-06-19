import React from 'react';
import { Source } from 'no-stack';

import ProjectForm from '../ProjectForm';
import Project from '../Project';
import SOURCE_QUERY from '../SourceQuery';

const sourceId = 'collection_platform_TestStack56_collection_user_Collection_source_projectSource';
const typeHierarchy = {
  'tree_source_collection_platform_TestStack56_collection_user_Collection_source_projectSource_tree_projectSource_Tree_type_project': null,
};

const unrestricted = false;
const parameters = {};

const Projects = () => (
  <Source
    id={sourceId}
    typeHierarchy={typeHierarchy}
    query={SOURCE_QUERY}
    unrestricted={unrestricted}
    parameters={parameters}
  >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';

      if (error) return `Error: ${error.graphQLErrors}`;

      const projects = data.sourceData.map(el => el.instance);

      return (
        <>
          <ProjectForm queryVariables={{
            id: sourceId,
            typeHierarchy: JSON.stringify(typeHierarchy),
            unrestricted,
            parameters: JSON.stringify(parameters),
          }} />
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
