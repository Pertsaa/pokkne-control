import { useMutation } from '@apollo/client';
import { SET_RESPONSES } from '../../graphql/mutations';
import { Intent } from '../../types';

interface ResponsesMutationResult {
  setResponses: Intent;
}

interface ResponsesMutationVars {
  id: number;
  responses: string[];
}

export const useSetResponses = () => {
  const [mutate, { data, loading, error }] = useMutation<
    ResponsesMutationResult,
    ResponsesMutationVars
  >(SET_RESPONSES);

  const setResponses = (params: ResponsesMutationVars) => {
    mutate({ variables: { ...params } });
  };

  return { setResponses, data, loading, error };
};
