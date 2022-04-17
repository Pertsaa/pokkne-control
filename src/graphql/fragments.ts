import { gql } from '@apollo/client';

export const CHATBOT_FIELDS = gql`
  fragment ChatbotFields on Chatbot {
    id
    name
    title
  }
`;

export const INTENT_FIELDS = gql`
  fragment IntentFields on Intent {
    id
    name
    examples
    responses
  }
`;

export const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    username
  }
`;
