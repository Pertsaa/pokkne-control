import { FC, useState } from 'react';

import { useAddChatbot } from '../../hooks/chatbots/useAddChatbot';
import { useChatbots } from '../../hooks/chatbots/useChatbots';
import Button from '../button';
import AddChatbotForm from '../forms/addChatbotForm';
import Modal from '../modal';
import ChatbotItem from './chatbotItem';

const ChatbotList: FC = () => {
  const [showChatbotForm, setShowChatbotForm] = useState(false);
  const { chatbots } = useChatbots();
  const { addChatbot } = useAddChatbot();

  if (!chatbots) return null;

  return (
    <>
      <Button onClick={() => setShowChatbotForm(true)}>Add Chatbot</Button>

      <Modal isOpen={showChatbotForm} close={() => setShowChatbotForm(false)}>
        <AddChatbotForm
          onSubmit={(values) => {
            addChatbot(values);
            setShowChatbotForm(false);
          }}
          onCancel={() => setShowChatbotForm(false)}
        />
      </Modal>

      {chatbots.map((chatbot) => (
        <ChatbotItem key={chatbot.id} chatbot={chatbot} />
      ))}
    </>
  );
};

export default ChatbotList;
