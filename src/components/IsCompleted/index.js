import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE_ACTION } from 'no-stack';
import { graphql } from 'react-apollo';

import { UPDATE_ISCOMPLETED_ACTION_ID } from '../../config';
import { IS_COMPLETED_FRAGMENT } from '../source-props/fragments';

const IsCompletedStyleWrapper = styled.span`
  margin-left: 1.5em;
  display: inline-block;
  border: 1px solid #eeeeee;
  padding: 0.5em;
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

function IsCompleted({ isCompleted, updateInstance, onUpdate }) {
  const [ isCompletedValue, updateIsCompletedValue ] = useState(isCompleted.value);
  const [ isEditMode, updateIsEditMode ] = useState(false);
  const [ isSaving, updateIsSaving ] = useState(false);

  function handleIsCompletedValueChange(e) {
    updateIsCompletedValue(e.target.value);
  }

  async function handleIsCompletedValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_ISCOMPLETED_ACTION_ID,
        executionParameters: JSON.stringify({
          value: isCompletedValue,
          instanceId: isCompleted.id,
        }),
        update: onUpdate(isCompleted.id, IS_COMPLETED_FRAGMENT),
      },
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }


  return (
    <IsCompletedStyleWrapper>
      {isEditMode ?
        (
          <>
            <label htmlFor={isCompleted.id}>
              IsCompleted Value:
              <input
                id={isCompleted.id} 
                type="text" 
                onChange={handleIsCompletedValueChange} 
                disabled={isSaving}
                value={isCompletedValue}
              />
            </label>
            <Button
              type="button"
              hoverColor="#00FF00"
              onClick={handleIsCompletedValueSave}
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
          </>
        ) :
        (
          <>
            {isCompletedValue}
            <Button
              type="button"
              onClick={() => updateIsEditMode(true)}
            >
              &#9998;
            </Button>
          </>
        )
      }
    </IsCompletedStyleWrapper>
  );
}

export default graphql(EXECUTE_ACTION, { name: 'updateInstance' })(IsCompleted);
