import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';

import { Header } from '../components';
import { client } from '../services/client';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header title="React Apollo demo" />
      </div>
    </ApolloProvider>
  );
};
