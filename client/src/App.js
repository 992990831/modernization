import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { TaskList } from './TaskList';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <TaskList></TaskList>
    </ApolloProvider>
  );
}

export default App;
