import { useMutation } from '@apollo/client';
import { REMOVE_INTENT } from '../graphql/mutations';
import { GET_INTENTS } from '../graphql/queries';

export const useRemoveIntent = () => {
  const [deleteIntent, { data, loading, error, ...result }] = useMutation(
    REMOVE_INTENT,
    {
      refetchQueries: [GET_INTENTS],
    }
  );

  const removeIntent = (id: number) => {
    deleteIntent({ variables: { removeIntentId: id } });
  };

  return { removeIntent, data, loading, error, ...result };
};
