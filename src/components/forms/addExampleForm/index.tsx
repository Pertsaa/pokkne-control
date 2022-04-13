import { FC, FormEvent, useState } from 'react';
import { Button } from '../../button';
import { Form, Label, Input } from '../styles';

interface Props {
  onSubmit: ({ example }: { example: string }) => void;
}

const AddExampleForm: FC<Props> = ({ onSubmit }) => {
  const [example, setExample] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ example });
    setExample('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">example</Label>
      <Input
        name="example"
        value={example}
        onChange={(e) => setExample(e.target.value)}
      />
      <Button type="submit">Add example</Button>
    </Form>
  );
};

export default AddExampleForm;
