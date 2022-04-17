import { FC } from 'react';

import { Container } from '../../components/layout/styles';
import Header from '../../components/header';
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
