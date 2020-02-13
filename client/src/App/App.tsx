import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';

import { client } from '../services/client';
import { Header } from '../components/Header';
import { RandomNumber } from '../components/RandomNumber';

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <Header title='React Apollo demo' />
      <RandomNumber />
    </div>
  </ApolloProvider>
);
