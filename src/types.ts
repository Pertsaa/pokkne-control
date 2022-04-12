export interface Intent {
  id: number;
  name: string;
  examples: string[];
  responses: string[];
}

export type NewIntent = Omit<Intent, 'id'>;

export interface Chatbot {
  id: number;
  title: string;
  name: string;
  intents: Intent[];
}
