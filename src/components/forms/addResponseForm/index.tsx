import { FC, FormEvent, useState } from 'react';
import { Button } from '../../button';
import { Form, Label, Input } from '../styles';

interface Props {
  onSubmit: ({ response }: { response: string }) => void;
}

const AddResponseForm: FC<Props> = ({ onSubmit }) => {
  const [response, setResponse] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ response });
    setResponse('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Response</Label>
      <Input
        name="response"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <Button type="submit">Add Response</Button>
    </Form>
  );
};

export default AddResponseForm;
