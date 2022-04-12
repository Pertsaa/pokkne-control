import { useMutation } from '@apollo/client';
import { ADD_INTENT } from '../../graphql/mutations';
import { GET_INTENTS } from '../../graphql/queries';
import { Intent, IntentsQueryResult, NewIntent } from '../../types';

export const useAddIntent = () => {
  const [mutate, { data, loading, error }] = useMutation<
    { addIntent: Intent },
    { newIntent: NewIntent }
  >(ADD_INTENT);

  const addIntent = (newIntent: NewIntent) => {
    mutate({
      variables: { newIntent },
      update: (cache, { data }) => {
        cache.updateQuery<IntentsQueryResult>(
          { query: GET_INTENTS },
          (cachedData) => ({
            intents: [...cachedData!.intents, data!.addIntent],
          })
        );
      },
    });
  };

  return { addIntent, data, loading, error };
};
