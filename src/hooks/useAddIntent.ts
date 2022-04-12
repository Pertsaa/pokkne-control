import { useMutation } from '@apollo/client';
import { ADD_INTENT } from '../graphql/mutations';
import { GET_INTENTS } from '../graphql/queries';

export const useAddIntent = () => {
  const [createIntent, { data, loading, error, ...result }] = useMutation(
    ADD_INTENT,
    {
      refetchQueries: [GET_INTENTS],
    }
  );

  const addIntent = ({ name }: { name: string }) => {
    createIntent({ variables: { intent: { name } } });
  };

  return { addIntent, data, loading, error, ...result };
};
