import { useMutation } from '@apollo/client';
import { UNASSIGN_INTENT } from '../../graphql/mutations';
import { Chatbot } from '../../types';

interface AssignIntentParams {
  chatbotId: number;
  intentId: number;
}

export const useUnassignIntent = () => {
  const [mutate, { data, loading, error }] = useMutation<
    { removeIntentFromChatbot: Chatbot },
    { chatbotId: number; intentId: number }
  >(UNASSIGN_INTENT);

  const unassignIntent = (params: AssignIntentParams) => {
    mutate({
      variables: { ...params },
    });
  };

  return { unassignIntent, data, loading, error };
};
