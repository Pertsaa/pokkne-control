import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export const useSignOut = () => {
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    localStorage.removeItem('pokkneapi-token');
    apolloClient.resetStore();
    navigate('/login', { replace: true });
  };

  return { signOut };
};
