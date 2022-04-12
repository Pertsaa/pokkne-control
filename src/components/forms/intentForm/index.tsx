import { FC, FormEvent, useState } from 'react';
import { Button } from '../../button';
import { Form, Input, Label } from '../styles';

interface Props {
  onSubmit: ({ name }: { name: string }) => void;
}

const IntentForm: FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit">Add Intent</Button>
    </Form>
  );
};

export default IntentForm;
