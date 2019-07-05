import React from 'react';
import styled from 'styled-components';

const IsCompletedStyleWrapper = styled.span`
  margin-left: 1.5em;
  display: inline-block;
  border: 1px solid #eeeeee;
  padding: 0.5em;
`;

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
