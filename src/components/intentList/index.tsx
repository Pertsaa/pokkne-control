import { FC, useState } from 'react';
import { useIntents } from '../../hooks/intents/useIntents';
import { useAddIntent } from '../../hooks/intents/useAddIntent';
import { Button } from '../button';
import Modal from '../modal';
import IntentForm from '../forms/intentForm';
import IntentItem from './intentItem';

const IntentList: FC = () => {
  const [showIntentForm, setShowIntentForm] = useState(false);
  const { intents } = useIntents();
  const { addIntent } = useAddIntent();

  const handleSubmit = ({ name }: { name: string }) => {
    addIntent({ name });
    setShowIntentForm(false);
  };

  if (!intents) return null;

  return (
    <>
      <Button onClick={() => setShowIntentForm(true)}>Add intent</Button>

      <Modal isOpen={showIntentForm} close={() => setShowIntentForm(false)}>
        <IntentForm onSubmit={handleSubmit} />
      </Modal>

      {intents.map((intent) => (
        <IntentItem key={intent.id} intent={intent} />
      ))}
    </>
  );
};

export default IntentList;
