import { FC } from 'react';

import { Container } from '../../components/layout/styles';
import Header from '../../components/header';
import IntentList from '../../components/intentList';

const Intents: FC = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <IntentList />
        </Container>
      </main>
    </>
  );
};

export default Intents;
