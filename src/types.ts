import { ButtonHTMLAttributes } from 'react';
import { To } from 'react-router-dom';

export interface Intent {
  id: number;
  name: string;
  examples: string[];
  responses: string[];
}

export type NewIntent = Omit<Intent, 'id' | 'examples' | 'responses'>;

export interface Chatbot {
  id: number;
  title: string;
  name: string;
  intents: Intent[];
}

export type NewChatbot = Omit<Chatbot, 'id' | 'intents'>;

export interface ChatbotsQueryResult {
  chatbots: Chatbot[];
}

export interface IntentsQueryResult {
  intents: Intent[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  to?: To;
}
