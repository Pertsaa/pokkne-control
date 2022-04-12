import { useMutation } from '@apollo/client';
import { REMOVE_CHATBOT } from '../graphql/mutations';
import { GET_CHATBOTS } from '../graphql/queries';

export const useRemoveChatbot = () => {
  const [deleteIntent, { data, loading, error, ...result }] = useMutation(
    REMOVE_CHATBOT,
    {
      refetchQueries: [GET_CHATBOTS],
    }
  );

  const removeChatbot = (id: number) => {
    deleteIntent({ variables: { removeChatbotId: id } });
  };

  return { removeChatbot, data, loading, error, ...result };
};
