import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';

import './App.css';
import theme from './App.theme';

import { client } from '../services/client';
import { Header } from '../components/Header';
import { RandomNumber } from '../components/RandomNumber';

const StyledApp = styled('div')`
  text-align: center;
  min-height: 100vh;
`;

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledApp>
        <Header title='React Apollo demo' />
        <RandomNumber />
      </StyledApp>
    </ThemeProvider>
    ,
  </ApolloProvider>
);
