import ApolloClient from 'apollo-boost';

const GQL_CLIENT = {
  uri: 'http://localhost:4000/graphql',
};

export const client = new ApolloClient(GQL_CLIENT);
