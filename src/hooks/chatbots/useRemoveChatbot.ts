import { useMutation } from '@apollo/client';
import { REMOVE_CHATBOT } from '../../graphql/mutations';

export const useRemoveChatbot = () => {
  const [mutate, { data, loading, error }] = useMutation<
    { removeChatbot: boolean },
    { id: number }
  >(REMOVE_CHATBOT);

  const removeChatbot = ({ id }: { id: number }) => {
    mutate({
      variables: { id },
      update: (cache) => {
        const entityId = cache.identify({ id, __typename: 'Chatbot' });
        cache.evict({ id: entityId });
        cache.gc();
      },
    });
  };

  return { removeChatbot, data, loading, error };
};
