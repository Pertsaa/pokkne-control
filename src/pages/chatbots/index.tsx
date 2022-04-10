import { FC } from 'react';
import Header from '../../components/header';
import { Container } from '../../components/layout';
import ChatbotList from '../../components/chatbotList';

const Chatbots: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ChatbotList />
        </Container>
      </main>
    </>
  );
};

export default Chatbots;
