import React from 'react';
import styled from 'styled-components';
import './App.css';
import { NoStackConsumer } from 'no-stack';

import NavBar from './components/NavBar';
import Projects from './components/Projects';

const Wrapper = styled.div`
  padding: 5em 5em;
  min-width: 480px;
`;

const App = () => (
  <>
    <NavBar />
    <Wrapper className="App">
      <NoStackConsumer>
        {({ loading, currentUser }) => {
          if (loading) return null;

          if (!currentUser) {
            return <div>Please Log In</div>;
          }

          return (
            <Projects />
          );
        }}
      </NoStackConsumer>
    </Wrapper>
  </>
);

export default App;
