import { useQuery } from '@apollo/client';
import { GET_CHATBOTS } from '../graphql/queries';
import { Chatbot } from '../types';

interface ChatbotData {
  chatbots: Chatbot[];
}

export const useChatbots = () => {
  const { data, loading, ...result } = useQuery<ChatbotData>(GET_CHATBOTS, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    chatbots: data?.chatbots,
    loading,
    ...result,
  };
};
