import { FC } from 'react';
import Header from '../../components/header';
import Table from '../../components/table';
import { Container } from '../../components/layout';
import { useChatbots } from '../../hooks/useChatbots';

const Chatbots: FC = () => {
  const { chatbots } = useChatbots();

  return (
    <>
      <Header />
      <main>
        <Container>
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
        </Container>
      </main>
    </>
  );
};

export default Chatbots;
