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

export const ASSIGN_INTENT = gql`
  ${CHATBOT_FIELDS}
  ${INTENT_FIELDS}

  mutation AddIntentToChatbot($chatbotId: ID!, $intentId: ID!) {
    addIntentToChatbot(chatbotId: $chatbotId, intentId: $intentId) {
      ...ChatbotFields
      intents {
        ...IntentFields
      }
    }
  }
`;

export const UNASSIGN_INTENT = gql`
  ${CHATBOT_FIELDS}
  ${INTENT_FIELDS}

  mutation RemoveIntentFromChatbot($chatbotId: ID!, $intentId: ID!) {
    removeIntentFromChatbot(chatbotId: $chatbotId, intentId: $intentId) {
      ...ChatbotFields
      intents {
        ...IntentFields
      }
    }
  }
`;

export const SET_EXAMPLES = gql`
  ${INTENT_FIELDS}

  mutation SetExamples($id: ID!, $examples: [String!]!) {
    setExamples(id: $id, examples: $examples) {
      ...IntentFields
    }
  }
`;

export const SET_RESPONSES = gql`
  ${INTENT_FIELDS}

  mutation SetResponses($id: ID!, $responses: [String!]!) {
    setResponses(id: $id, responses: $responses) {
      ...IntentFields
    }
  }
`;
