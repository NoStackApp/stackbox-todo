import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from '@apollo/react-hoc';

import { UPDATE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID } from '../../config';
import { PROJECT_FRAGMENT } from '../source-props/fragments';

import Todos from '../Todos';

const ProjectStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const Row = styled.div`
  margin: 1em 0;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hoverColor || '#000000'};
  }
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
        actionId: UPDATE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID,
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
          <Row>
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
            <Button
              type="button"
              hoverColor="#00FF00"
              onClick={handleProjectValueSave}
              disabled={isSaving}
            >
              &#10003;
            </Button>
            <Button
              type="button"
              hoverColor="#FF0000"
              onClick={() => updateIsEditMode(false)}
              disabled={isSaving}
            >
              &#10005;
            </Button>
          </Row>
        ) : 
        (
          <h3>
            {project.value}
            <Button
              type="button"
              onClick={() => updateIsEditMode(true)}
            >
              &#9998;
            </Button>
          </h3>
        )
      }
      <Todos projectId={project.id} />
    </ProjectStyleWrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(Project);
