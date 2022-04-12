import { gql } from '@apollo/client';
import { CHATBOT_FIELDS, INTENT_FIELDS } from './fragments';

export const ADD_INTENT = gql`
  mutation AddIntent($intent: IntentInput!) {
    addIntent(intent: $intent) {
      id
      name
    }
  }
`;

export const REMOVE_INTENT = gql`
  mutation RemoveIntent($removeIntentId: ID!) {
    removeIntent(id: $removeIntentId)
  }
`;

export const ADD_CHATBOT = gql`
  ${CHATBOT_FIELDS}
  ${INTENT_FIELDS}

  mutation AddChatbot($chatbot: ChatbotInput!) {
    addChatbot(chatbot: $chatbot) {
      ...ChatbotFields
      intents {
        ...IntentFields
      }
    }
  }
`;

export const REMOVE_CHATBOT = gql`
  mutation RemoveChatbot($removeChatbotId: ID!) {
    removeChatbot(id: $removeChatbotId)
  }
`;
