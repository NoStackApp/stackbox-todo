import React from 'react';
import { Source } from 'no-stack';

import ProjectForm from '../ProjectForm';
import Project from '../Project';
import SOURCE_QUERY from '../SourceQuery';

const sourceId = '1d98749d-f52c-4259-8946-a82f425f258b';
const typeHierarchy = {
  'todo-project': null,
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
          { /*<ProjectForm onSubmit={onAdd} /> */ }
          {projects && projects.map(project => <Project key={project.id} project={project} />)}
        </>
      );
    }}
  </Source>
);

export default Projects;
