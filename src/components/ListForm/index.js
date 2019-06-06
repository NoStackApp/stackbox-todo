import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  margin-left: 1em;
`;

function ListForm({ onSubmit }) {
  const [ listName, updateListName ] = useState('');

  const id = v4();
  const inputFieldId = `item-name-field-${id}`;

  function handleChange(e) {
    updateListName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!listName) {
      return;
    }

    const list = {
      id,
      name: listName,
      items: [],
    };

    onSubmit(list);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);      
    }
  }

  return (
    <Form>
      <label htmlFor={inputFieldId}>
        List Name:{' '}
        <input 
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={listName} />
      </label>
      <Button type="submit" onClick={handleSubmit}>Create List</Button>
    </Form>
  );
}

export default ListForm;

