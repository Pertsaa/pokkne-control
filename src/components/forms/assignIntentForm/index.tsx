import { FC, FormEvent, useState } from 'react';
import { Intent } from '../../../types';
import { Button } from '../../button';
import { Form, Label, Select } from '../styles';

interface Props {
  intents: Intent[];
  onSubmit: ({ intentId }: { intentId: number }) => void;
}

const AssignIntentForm: FC<Props> = ({ intents, onSubmit }) => {
  const [selectedIntent, setSelectedIntent] = useState(intents[0]?.name || '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const intent = intents.find((i) => i.name === selectedIntent);
    if (intent) onSubmit({ intentId: intent.id });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="intent">Intent</Label>

      <Select
        value={selectedIntent}
        onChange={(e) => setSelectedIntent(e.target.value)}
      >
        {intents.map((intent) => (
          <option key={intent.id} value={intent.name}>
            {intent.name}
          </option>
        ))}
      </Select>

      <Button type="submit">Assign intent</Button>
    </Form>
  );
};

export default AssignIntentForm;
