import { FC, useState } from 'react';
import { useRemoveIntent } from '../../hooks/intents/useRemoveIntent';
import { useIntents } from '../../hooks/intents/useIntents';
import { Button } from '../button';
import Modal from '../modal';
import IntentForm from '../forms/intentForm';
import Table from '../table';
import { useAddIntent } from '../../hooks/intents/useAddIntent';

const IntentList: FC = () => {
  const { intents } = useIntents();
  const [showModal, setShowModal] = useState(false);
  const { removeIntent } = useRemoveIntent();
  const { addIntent } = useAddIntent();

  const handleSubmit = ({ name }: { name: string }) => {
    addIntent({ name });
    setShowModal(false);
  };

  if (!intents) return null;

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add intent</Button>

      <Modal isOpen={showModal} close={() => setShowModal(false)}>
        <IntentForm onSubmit={handleSubmit} />
      </Modal>

      {intents &&
        intents.map((intent) => (
          <Table
            key={intent.id}
            title={intent.name}
            columns={[
              { label: 'Examples', values: intent.examples },
              { label: 'Responses', values: intent.responses },
            ]}
            onDelete={() => removeIntent({ id: intent.id })}
          />
        ))}
    </>
  );
};

export default IntentList;
