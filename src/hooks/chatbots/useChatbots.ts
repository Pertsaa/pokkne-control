import { useQuery } from '@apollo/client';

import { GET_CHATBOTS } from '../../graphql/queries';
import { ChatbotsQueryResult } from '../../types';

export const useChatbots = () => {
  const { data, loading, error } = useQuery<ChatbotsQueryResult>(GET_CHATBOTS);

  return {
    chatbots: data?.chatbots,
    loading,
    error,
  };
};
