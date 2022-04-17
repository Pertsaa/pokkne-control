import { useApolloClient, useMutation } from '@apollo/client';

import { AuthQueryResult, Credentials } from '../../types';
import { SIGN_IN } from '../../graphql/mutations';
import { GET_ME } from '../../graphql/queries';

export const useSignIn = () => {
  const client = useApolloClient();
  const [mutate, { data, loading, error }] = useMutation<
    { login: AuthQueryResult },
    { input: Credentials }
  >(SIGN_IN);

  const signIn = async (credentials: Credentials) => {
    const { data } = await mutate({ variables: { input: credentials } });
    if (data?.login.accessToken) {
      localStorage.setItem('pokkneapi-token', data.login.accessToken);
    }
    await client.refetchQueries({
      include: [GET_ME],
    });
  };

  return { signIn, data, loading, error };
};
