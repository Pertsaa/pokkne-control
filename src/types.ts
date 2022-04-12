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

// Query Types

export interface ChatbotsQueryResult {
  chatbots: Chatbot[];
}

export interface IntentsQueryResult {
  intents: Intent[];
}
