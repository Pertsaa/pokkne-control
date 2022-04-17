import { useQuery } from '@apollo/client';

import { GET_ME } from '../../graphql/queries';
import { MeQueryResult } from '../../types';

export const useMe = () => {
  const { data, loading, error } = useQuery<MeQueryResult>(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    me: data?.me,
    loading,
    error,
  };
};
