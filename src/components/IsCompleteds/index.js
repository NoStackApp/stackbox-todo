import React from 'react';
import styled from 'styled-components';

import CreateIsCompletedForm from '../CreateIsCompletedForm';
import IsCompleted from '../IsCompleted';

const IsCompletedsStyleWrapper = styled.div``;

function IsCompleteds({ isCompleteds, currentTodoId, onUpdate, refetchQueries }) {
  return (
    <IsCompletedsStyleWrapper>
      <CreateIsCompletedForm
        currentTodoId={currentTodoId}
        refetchQueries={refetchQueries}
      />

      {isCompleteds.map(isCompleted => (
        <IsCompleted 
          key={isCompleted.instance.id}
          isCompleted={isCompleted.instance}
          onUpdate={onUpdate}
        />
      ))}
    </IsCompletedsStyleWrapper>
  );
}

export default IsCompleteds;
