import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:4000',
    }),
  });
  return client;
};
