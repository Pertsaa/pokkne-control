import { gql } from '@apollo/client';
import { CHATBOT_FIELDS, INTENT_FIELDS } from './fragments';

export const GET_CHATBOTS = gql`
  ${CHATBOT_FIELDS}
  ${INTENT_FIELDS}

  query {
    chatbots {
      ...ChatbotFields
      intents {
        ...IntentFields
      }
    }
  }
`;

export const GET_INTENTS = gql`
  ${INTENT_FIELDS}

  query {
    intents {
      ...IntentFields
    }
  }
`;
