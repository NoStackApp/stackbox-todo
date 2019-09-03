import React from 'react';
import styled from 'styled-components';

import { LogoutButton } from 'no-stack';

const Wrapper = styled.div`
  left: 0;
  top: 0;
  padding: 1em 3em;
  font-size: 1rem;
  color: #fffff0;
  background-color: #00000f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => (
  <Wrapper>
    <div>stackbox todo</div>
    <div>
      <LogoutButton />
    </div>
  </Wrapper>
);

export default NavBar;