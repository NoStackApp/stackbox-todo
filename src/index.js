import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { LoginProvider } from 'no-stack';

import { PLATFORM_ID } from './config';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import client from './client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <LoginProvider platformId={PLATFORM_ID}>
      <App />
    </LoginProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
