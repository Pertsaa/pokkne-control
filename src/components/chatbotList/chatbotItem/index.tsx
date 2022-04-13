import { FC, useState } from 'react';
import { useAssignIntent } from '../../../hooks/chatbots/useAssignIntent';
import { useRemoveChatbot } from '../../../hooks/chatbots/useRemoveChatbot';
import { useUnassignIntent } from '../../../hooks/chatbots/useUnassignIntent';
import { Chatbot, Intent } from '../../../types';
import AssignIntentForm from '../../forms/assignIntentForm';
import Modal from '../../modal';
import Table from '../../table';

interface Props {
  chatbot: Chatbot;
  intents: Intent[];
}

const ChatbotItem: FC<Props> = ({ chatbot, intents }) => {
  const [showAssignForm, setShowAssignForm] = useState(false);
  const { removeChatbot } = useRemoveChatbot();
  const { assignIntent } = useAssignIntent();
  const { unassignIntent } = useUnassignIntent();

  const handleAssignIntent = ({ intentId }: { intentId: number }) => {
    assignIntent({ chatbotId: chatbot.id, intentId });
    setShowAssignForm(false);
  };

  const handleUnassignIntent = (name: string) => {
    const intent = intents.find((i) => i.name === name);
    if (intent) unassignIntent({ chatbotId: chatbot.id, intentId: intent.id });
  };

  const newIntents = intents.filter(
    (i) => !chatbot.intents.some((it) => it.id === i.id)
  );

  return (
    <>
      <Modal isOpen={showAssignForm} close={() => setShowAssignForm(false)}>
        <AssignIntentForm intents={newIntents} onSubmit={handleAssignIntent} />
      </Modal>

      <Table
        key={chatbot.id}
        title={chatbot.title}
        columns={[
          { label: 'Name', values: [chatbot.name] },
          {
            label: 'Intents',
            values: chatbot.intents.map((intent) => intent.name),
            onEdit: () => {
              setShowAssignForm(true);
            },
            onCellDelete: (name: string) => {
              handleUnassignIntent(name);
            },
          },
        ]}
        onDelete={() => removeChatbot({ id: chatbot.id })}
      />
    </>
  );
};

export default ChatbotItem;
