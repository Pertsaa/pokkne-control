import { FC, useState } from 'react';
import { useRemoveIntent } from '../../hooks/useRemoveIntent';
import { useIntents } from '../../hooks/useIntents';
import { Button } from '../button';
import Modal from '../modal';
import IntentForm from '../forms/intentForm';
import Table from '../table';
import { useAddIntent } from '../../hooks/useAddIntent';

const IntentList: FC = () => {
  const { intents, loading, error } = useIntents();
  const [showModal, setShowModal] = useState(false);
  const { removeIntent } = useRemoveIntent();
  const { addIntent } = useAddIntent();

  const handleSubmit = ({ name }: { name: string }) => {
    addIntent({ name });
    setShowModal(false);
  };

  if (loading || error) return null;

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
            onDelete={() => removeIntent(intent.id)}
          />
        ))}
    </>
  );
};

export default IntentList;
