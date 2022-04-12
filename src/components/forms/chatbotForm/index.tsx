import { FC, FormEvent, useState } from 'react';
import { NewChatbot } from '../../../types';
import { Button } from '../../button';
import { Form, Input, Label } from '../styles';

interface Props {
  onSubmit: (chatbot: NewChatbot) => void;
}

const ChatbotForm: FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, name });
    setTitle('');
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label htmlFor="name">Name</Label>
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit">Add Chatbot</Button>
    </Form>
  );
};

export default ChatbotForm;
