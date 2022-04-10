import { FC } from 'react';
import { useIntents } from '../../hooks/useIntents';
import Table from '../table';
import { Button } from '../button';

const IntentList: FC = () => {
  const { intents } = useIntents();

  return (
    <>
      <Button>Add Intent</Button>

      {intents &&
        intents.map((intent) => (
          <Table
            key={intent.id}
            title={intent.name}
            headers={['Examples', 'Responses']}
            cols={[intent.examples, intent.responses]}
          />
        ))}
    </>
  );
};

export default IntentList;
