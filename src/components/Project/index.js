import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

import { UPDATE_PROJECT_ACTION_ID } from '../../config';
import { PROJECT_FRAGMENT } from '../source-props/fragments';

import Todos from '../Todos';

const ProjectStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

function Project({ project, updateInstance, onUpdate }) {
  const [ projectValue, updateProjectValue ] = useState(project.value);
  const [ isEditMode, updateIsEditMode ] = useState(false);
  const [ isSaving, updateIsSaving ] = useState(false);

  function handleProjectValueChange(e) {
    updateProjectValue(e.target.value);
  }

  async function handleProjectValueSave() {
    updateIsSaving(true);
    
    await updateInstance({
      variables: {
        actionId: UPDATE_PROJECT_ACTION_ID,
        executionParameters: JSON.stringify({
          value: projectValue,
          instanceId: project.id,
        }),
      },
      update: onUpdate(project.id, PROJECT_FRAGMENT),
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }

  return (
    <ProjectStyleWrapper>
      {isEditMode ?
        (
          <div>
            <label htmlFor={project.id}>
              Project Value:
              <input
                id={project.id}
                type="text"
                value={projectValue}
                onChange={handleProjectValueChange}
                disabled={isSaving}
              />
            </label>
            <button
              type="button"
              onClick={handleProjectValueSave}
              disabled={isSaving}
            >
              &#10003;
            </button>
            <button
              type="button"
              onClick={() => updateIsEditMode(false)}
              disabled={isSaving}
            >
              &#10005;
            </button>
          </div>
        ) : 
        (
          <h3>
            {project.value}
            <button
              type="button"
              onClick={() => updateIsEditMode(true)}
            >
              &#9998;
            </button>
          </h3>
        )
      }
      <Todos projectId={project.id} />
    </ProjectStyleWrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(Project);
