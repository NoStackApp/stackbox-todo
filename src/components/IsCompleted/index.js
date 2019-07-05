import React from 'react';
import styled from 'styled-components';

const IsCompletedStyleWrapper = styled.span``;

function IsCompleted({ isCompleted, label, onChange, disabled = false }) {
  return (
    <IsCompletedStyleWrapper>
      <label htmlFor={isCompleted.id}>
        {label}
        <input
          id={isCompleted.id} 
          type="checkbox" 
          checked={isCompleted.value === 'true'} 
          onChange={onChange} 
          disabled={disabled}
        />
      </label>
    </IsCompletedStyleWrapper>
  );
}

export default IsCompleted;
