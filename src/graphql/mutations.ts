import { gql } from '@apollo/client';

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
