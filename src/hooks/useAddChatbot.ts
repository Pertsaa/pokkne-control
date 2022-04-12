import { useMutation } from '@apollo/client';
import { ADD_CHATBOT } from '../graphql/mutations';
import { GET_CHATBOTS } from '../graphql/queries';

export const useAddChatbot = () => {
  const [createChatbot, { data, loading, error, ...result }] = useMutation(
    ADD_CHATBOT,
    {
      refetchQueries: [GET_CHATBOTS],
    }
  );

  const addChatbot = ({ title, name }: { title: string; name: string }) => {
    createChatbot({ variables: { chatbot: { title, name } } });
  };

  return { addChatbot, data, loading, error, ...result };
};
