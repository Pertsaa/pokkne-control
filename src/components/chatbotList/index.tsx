import { FC, useState } from 'react';
import { useAddChatbot } from '../../hooks/chatbots/useAddChatbot';
import { useChatbots } from '../../hooks/chatbots/useChatbots';
import { useIntents } from '../../hooks/intents/useIntents';
import { Button } from '../button';
import ChatbotForm from '../forms/chatbotForm';
import Modal from '../modal';
import ChatbotItem from './chatbotItem';

const ChatbotList: FC = () => {
  const [showChatbotForm, setShowChatbotForm] = useState(false);
  const { chatbots } = useChatbots();
  const { intents } = useIntents();
  const { addChatbot } = useAddChatbot();

  const handleAddChatbot = ({
    title,
    name,
  }: {
    title: string;
    name: string;
  }) => {
    addChatbot({ title, name });
    setShowChatbotForm(false);
  };

  if (!chatbots) return null;

  return (
    <>
      <Button onClick={() => setShowChatbotForm(true)}>Add Chatbot</Button>

      <Modal isOpen={showChatbotForm} close={() => setShowChatbotForm(false)}>
        <ChatbotForm onSubmit={handleAddChatbot} />
      </Modal>

      {chatbots.map((chatbot) => (
        <ChatbotItem
          key={chatbot.id}
          chatbot={chatbot}
          intents={intents || []}
        />
      ))}
    </>
  );
};

export default ChatbotList;
