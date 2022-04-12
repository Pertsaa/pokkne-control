import { useMutation } from '@apollo/client';
import { ADD_CHATBOT } from '../../graphql/mutations';
import { GET_CHATBOTS } from '../../graphql/queries';
import { Chatbot, ChatbotsQueryResult, NewChatbot } from '../../types';

export const useAddChatbot = () => {
  const [mutate, { data, loading, error }] = useMutation<
    { addChatbot: Chatbot },
    { newChatbot: NewChatbot }
  >(ADD_CHATBOT);

  const addChatbot = (newChatbot: NewChatbot) => {
    mutate({
      variables: { newChatbot },
      update: (cache, { data }) => {
        cache.updateQuery<ChatbotsQueryResult>(
          { query: GET_CHATBOTS },
          (cachedData) => ({
            chatbots: [...cachedData!.chatbots, data!.addChatbot],
          })
        );
      },
    });
  };

  return { addChatbot, data, loading, error };
};
