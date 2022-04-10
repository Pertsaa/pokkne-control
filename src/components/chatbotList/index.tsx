import { FC } from 'react';
import { useChatbots } from '../../hooks/useChatbots';
import Table from '../table';
import { Button } from '../button';

const ChatbotList: FC = () => {
  const { chatbots } = useChatbots();

  return (
    <>
      <Button>Add Chatbot</Button>

      {chatbots &&
        chatbots.map((chatbot) => (
          <Table
            key={chatbot.id}
            title={chatbot.title}
            headers={['Name', 'Intents']}
            cols={[
              [chatbot.name],
              chatbot.intents.map((intent) => intent.name),
            ]}
          />
        ))}
    </>
  );
};

export default ChatbotList;
