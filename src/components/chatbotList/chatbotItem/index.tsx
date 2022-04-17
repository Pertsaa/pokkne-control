import { FC, useState } from 'react';

import { useAssignIntent } from '../../../hooks/chatbots/useAssignIntent';
import { useRemoveChatbot } from '../../../hooks/chatbots/useRemoveChatbot';
import { useUnassignIntent } from '../../../hooks/chatbots/useUnassignIntent';
import { useIntents } from '../../../hooks/intents/useIntents';
import { Chatbot } from '../../../types';
import FlexTable from '../../flexTable';
import AssignIntentForm from '../../forms/assignIntentForm';
import Modal from '../../modal';

interface Props {
  chatbot: Chatbot;
}

const ChatbotItem: FC<Props> = ({ chatbot }) => {
  const [showAssignForm, setShowAssignForm] = useState(false);
  const { intents } = useIntents();
  const { removeChatbot } = useRemoveChatbot();
  const { assignIntent } = useAssignIntent();
  const { unassignIntent } = useUnassignIntent();

  const handleAssignIntent = ({ name }: { name: string }) => {
    if (!intents) return;
    const intent = intents.find((i) => i.name === name);
    if (intent) assignIntent({ chatbotId: chatbot.id, intentId: intent.id });
    setShowAssignForm(false);
  };

  const handleUnassignIntent = (name: string) => {
    if (!intents) return;
    const intent = intents.find((i) => i.name === name);
    if (intent) unassignIntent({ chatbotId: chatbot.id, intentId: intent.id });
  };

  const intentOptions = intents
    ? intents
        .filter((i) => !chatbot.intents.some((it) => it.id === i.id))
        .map((i) => i.name)
    : [];

  return (
    <>
      <Modal isOpen={showAssignForm} close={() => setShowAssignForm(false)}>
        <AssignIntentForm
          options={intentOptions}
          onSubmit={handleAssignIntent}
          onCancel={() => setShowAssignForm(false)}
        />
      </Modal>

      <FlexTable
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
        onDelete={() => {
          if (window.confirm(`Remove chatbot with title ${chatbot.title}?`)) {
            removeChatbot({ id: chatbot.id });
          }
        }}
      />
    </>
  );
};

export default ChatbotItem;
