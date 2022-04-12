import { FC, useState } from 'react';
import { useAddChatbot } from '../../hooks/useAddChatbot';
import { useChatbots } from '../../hooks/useChatbots';
import { useRemoveChatbot } from '../../hooks/useRemoveChatbot';
import { Button } from '../button';
import ChatbotForm from '../forms/chatbotForm';
import Modal from '../modal';
import Table from '../table';

const ChatbotList: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { chatbots, loading, error } = useChatbots();
  const { addChatbot } = useAddChatbot();
  const { removeChatbot } = useRemoveChatbot();

  const handleSubmit = ({ title, name }: { title: string; name: string }) => {
    addChatbot({ title, name });
    setShowModal(false);
  };

  if (loading || error) return null;

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add Chatbot</Button>

      <Modal isOpen={showModal} close={() => setShowModal(false)}>
        <ChatbotForm onSubmit={handleSubmit} />
      </Modal>

      {chatbots &&
        chatbots.map((chatbot) => (
          <Table
            key={chatbot.id}
            title={chatbot.title}
            columns={[
              { label: 'Name', values: [chatbot.name], onEdit: () => {} },
              {
                label: 'Intents',
                values: chatbot.intents.map((intent) => intent.name),
                onEdit: () => {},
              },
            ]}
            onDelete={() => removeChatbot(chatbot.id)}
          />
        ))}
    </>
  );
};

export default ChatbotList;
