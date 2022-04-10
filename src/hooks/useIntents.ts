import { useQuery } from '@apollo/client';
import { GET_INTENTS } from '../graphql/queries';
import { Intent } from '../types';

interface IntentData {
  intents: Intent[];
}

export const useIntents = () => {
  const { data, loading, ...result } = useQuery<IntentData>(GET_INTENTS, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    intents: data?.intents,
    loading,
    ...result,
  };
};
