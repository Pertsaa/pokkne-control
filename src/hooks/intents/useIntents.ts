import { useQuery } from '@apollo/client';

import { GET_INTENTS } from '../../graphql/queries';
import { IntentsQueryResult } from '../../types';

export const useIntents = () => {
  const { data, loading, error } = useQuery<IntentsQueryResult>(GET_INTENTS);

  return {
    intents: data?.intents,
    loading,
    error,
  };
};
