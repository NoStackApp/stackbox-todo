import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import {v4} from 'uuid';

import NavBar from './components/NavBar';
import List from './components/List';
import ListForm from './components/ListForm';

const Wrapper = styled.div`
  padding: 5em 5em;
  min-width: 480px;
`;

const data = { 
  lists: [
  {
    id: v4(),
    name: 'bar',
    items: [
    {
      id: v4(),
      name: 'task 1',
      done: false,
    },
    {
      id: v4(),
      name: 'task 2',
      done: false,
    }
    ],
  },
  {
    id: v4(),
    name: 'foo',
    items: [
    {
      id: v4(),
      name: 'task 1',
      done: false,
    },
    {
      id: v4(),
      name: 'task 2',
      done: false,
    }
    ],
  }
  ],
};

class App extends Component {
  state = {
    lists: data.lists
  };

  handleAddList = list => {
    const { lists } = this.state;

    this.setState({
      lists: [ ...lists, list ],
    });
  };

  render() {
    const { lists } = this.state;

    return (
      <>
        <NavBar />
        <Wrapper className="App">
          <ListForm onSubmit={this.handleAddList} />
          {lists.map(list => <List key={list.id} list={list} />)}
        </Wrapper>
      </>
    );
  }
}

export default App;
