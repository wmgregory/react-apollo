import { ApolloServer, gql } from 'apollo-server-lambda';

const schema = gql`
  type Query {
    hello: String
    rand: Float
  }
`;

const resolvers = {
  Query: {
    hello: (): string => 'Hello world!!',
    rand: (): number => Math.random(),
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
  formatResponse: (response: any) => {
    console.log(response);
    return response;
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  tracing: true,
});

exports.graphql = server.createHandler({
  cors: {
    origin: '*',
  },
});
