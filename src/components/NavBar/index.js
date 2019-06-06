import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  left: 0;
  top: 0;
  padding: 1em 3em;
  font-size: 1rem;
  color: #fffff0;
  background-color: #00000f;
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => (
  <Wrapper>
    <div>no-stack todo</div>
    <div>Login</div>
  </Wrapper>
);

export default NavBar;
