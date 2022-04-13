import { FC, useState } from 'react';
import { useRemoveIntent } from '../../../hooks/intents/useRemoveIntent';
import { useSetExamples } from '../../../hooks/intents/useSetExamples';
import { useSetResponses } from '../../../hooks/intents/useSetResponses';
import { Intent } from '../../../types';
import AddExampleForm from '../../forms/addExampleForm';
import AddResponseForm from '../../forms/addResponseForm';
import Modal from '../../modal';
import Table from '../../table';

interface Props {
  intent: Intent;
}

const IntentItem: FC<Props> = ({ intent }) => {
  const [showExampleForm, setShowExampleForm] = useState(false);
  const [showResponseForm, setShowResponseForm] = useState(false);
  const { removeIntent } = useRemoveIntent();
  const { setExamples } = useSetExamples();
  const { setResponses } = useSetResponses();

  const handleAddExample = ({ example }: { example: string }) => {
    setExamples({
      id: intent.id,
      examples: [...intent.examples, example],
    });
    setShowExampleForm(false);
  };

  const handleAddResponse = ({ response }: { response: string }) => {
    setResponses({
      id: intent.id,
      responses: [...intent.responses, response],
    });
    setShowResponseForm(false);
  };

  const removeExample = ({ example }: { example: string }) => {
    setExamples({
      id: intent.id,
      examples: intent.examples.filter((e) => e !== example),
    });
  };

  const removeResponse = ({ response }: { response: string }) => {
    setResponses({
      id: intent.id,
      responses: intent.responses.filter((r) => r !== response),
    });
  };

  return (
    <>
      <Modal isOpen={showExampleForm} close={() => setShowExampleForm(false)}>
        <AddExampleForm onSubmit={handleAddExample} />
      </Modal>

      <Modal isOpen={showResponseForm} close={() => setShowResponseForm(false)}>
        <AddResponseForm onSubmit={handleAddResponse} />
      </Modal>

      <Table
        key={intent.id}
        title={intent.name}
        columns={[
          {
            label: 'Examples',
            values: intent.examples,
            onEdit: () => setShowExampleForm(true),
            onCellDelete: (example) => removeExample({ example }),
          },
          {
            label: 'Responses',
            values: intent.responses,
            onEdit: () => setShowResponseForm(true),
            onCellDelete: (response) => removeResponse({ response }),
          },
        ]}
        onDelete={() => removeIntent({ id: intent.id })}
      />
    </>
  );
};

export default IntentItem;
