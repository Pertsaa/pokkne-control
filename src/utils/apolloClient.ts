import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('pokkneapi-token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};
