import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import { UPDATE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID, DELETE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID } from '../../config';
import { PROJECT_FRAGMENT } from '../source-props/fragments';

import Todos from '../Todos';

const ProjectStyleWrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
  opacity: ${props => props.isDeleting ? 0.2 : 1.0};
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

const DeleteMenu = styled.div`
  color: red;
  margin: 1em;
  padding: 1em;
  border: 1px solid #eeeeee;
`;

function Project({ project, currentUserId, updateInstance, deleteInstance, onUpdate, onDelete }) {
  const [ projectValue, updateProjectValue ] = useState(project.value);
  const [ isEditMode, updateIsEditMode ] = useState(false);
  const [ isSaving, updateIsSaving ] = useState(false);
  const [ isDeleteMode, updateIsDeleteMode ] = useState(false);
  const [ isDeleting, updateIsDeleting ] = useState(false);

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

  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_PROJECT_FOR_PROJECT_SOURCE_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: currentUserId,
            instanceId: project.id,
          }),
        },
        update: onDelete(project.id),
      });
    } catch (e) {
      updateIsDeleting(false);
    }
  }

  return (
    <ProjectStyleWrapper isDeleting={isDeleting}>
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
            {isDeleteMode ? (
                <DeleteMenu>
                  Delete?
                  <Button
                    type="button"
                    hoverColor="#00FF00"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    &#10003;
                  </Button>
                  <Button
                    type="button"
                    hoverColor="#FF0000"
                    onClick={() => updateIsDeleteMode(false)}
                    disabled={isDeleting}
                  >
                    &#10005;
                  </Button>
                </DeleteMenu>
            ):
              (
              <>
                <Button
                  type="button"
                  onClick={() => updateIsEditMode(true)}
                >
                  &#9998;
                </Button>
                <Button
                  type="button"
                  onClick={() => updateIsDeleteMode(true)}
                >
                  &#128465;
                </Button>
              </>
              )
            }
          </h3>
        )
      }
      <Todos projectId={project.id} />
    </ProjectStyleWrapper>
  );
}

export default compose(
  graphql(EXECUTE_ACTION, { name: 'updateInstance' }),
  graphql(EXECUTE_ACTION, { name: 'deleteInstance' })
)(Project);
