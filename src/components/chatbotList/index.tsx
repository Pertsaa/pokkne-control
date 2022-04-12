import { FC } from 'react';
import { useChatbots } from '../../hooks/useChatbots';
import { Button } from '../button';
import Table from '../table';

const ChatbotList: FC = () => {
  const { chatbots, loading, error } = useChatbots();

  if (loading || error) return null;

  return (
    <>
      <Button>Add Chatbot</Button>

      {chatbots &&
        chatbots.map((chatbot) => (
          <Table
            key={chatbot.id}
            title={chatbot.title}
            columns={[
              { label: 'Name', values: [chatbot.name] },
              {
                label: 'Intents',
                values: chatbot.intents.map((intent) => intent.name),
              },
            ]}
            onDelete={() => {}}
          />
        ))}
    </>
  );
};

export default ChatbotList;
