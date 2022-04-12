import { gql } from '@apollo/client';
import { CHATBOT_FIELDS, INTENT_FIELDS } from './fragments';

export const ADD_INTENT = gql`
  ${INTENT_FIELDS}

  mutation AddIntent($newIntent: IntentInput!) {
    addIntent(intent: $newIntent) {
      ...IntentFields
    }
  }
`;

export const REMOVE_INTENT = gql`
  mutation RemoveIntent($id: ID!) {
    removeIntent(id: $id)
  }
`;

export const ADD_CHATBOT = gql`
  ${CHATBOT_FIELDS}
  ${INTENT_FIELDS}

  mutation AddChatbot($newChatbot: ChatbotInput!) {
    addChatbot(chatbot: $newChatbot) {
      ...ChatbotFields
      intents {
        ...IntentFields
      }
    }
  }
`;

export const REMOVE_CHATBOT = gql`
  mutation RemoveChatbot($id: ID!) {
    removeChatbot(id: $id)
  }
`;
