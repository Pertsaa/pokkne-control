import { useMutation } from '@apollo/client';

import { ASSIGN_INTENT } from '../../graphql/mutations';
import { Chatbot } from '../../types';

interface AssignIntentParams {
  chatbotId: number;
  intentId: number;
}

export const useAssignIntent = () => {
  const [mutate, { data, loading, error }] = useMutation<
    { addIntentToChatbot: Chatbot },
    { chatbotId: number; intentId: number }
  >(ASSIGN_INTENT);

  const assignIntent = (params: AssignIntentParams) => {
    mutate({
      variables: { ...params },
    });
  };

  return { assignIntent, data, loading, error };
};
