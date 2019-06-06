import React from 'react';
import styled from 'styled-components';

import Item from '../Item';
import ItemForm from '../ItemForm';

const Wrapper = styled.div`
  margin: 2em 1em;
  padding: 1.5em;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function List({ list, onItemDelete }) {
  return (
    <Wrapper>
      <h3>{list.name}</h3>
      <ItemForm />
      <Items>
    {list.items.map(item => (
      <Item 
        key={item.id}
        id={item.id}
        done={item.done}
        name={item.name}
        childList={item.list}
        onDelete={onItemDelete}
      />
    ))}
    </Items>
    </Wrapper>
  )
}

export default List;
