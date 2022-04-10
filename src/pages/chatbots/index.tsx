import { FC } from 'react';
import { Chatbot } from '../../types';
import Header from '../../components/header';
import Table from '../../components/table';
import { Container } from '../../components/layout';

const chatbots: Chatbot[] = [
  {
    id: 1,
    title: 'Discord',
    name: 'Pokkne',
    intents: [
      {
        id: 1,
        name: 'Greeting',
        examples: ['hei', 'moi', 'moro', 'terve'],
        responses: ['Hei!', 'Hei vaan!', 'Heips!'],
      },
      {
        id: 2,
        name: 'Opinion',
        examples: ['mp', 'mielipide'],
        responses: [],
      },
    ],
  },
];

const Chatbots: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          {chatbots.map((chatbot) => (
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
