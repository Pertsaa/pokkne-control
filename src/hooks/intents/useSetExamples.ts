import { useMutation } from '@apollo/client';

import { SET_EXAMPLES } from '../../graphql/mutations';
import { Intent } from '../../types';

interface ExamplesMutationResult {
  setExamples: Intent;
}

interface ExamplesMutationVars {
  id: number;
  examples: string[];
}

export const useSetExamples = () => {
  const [mutate, { data, loading, error }] = useMutation<
    ExamplesMutationResult,
    ExamplesMutationVars
  >(SET_EXAMPLES);

  const setExamples = (params: ExamplesMutationVars) => {
    mutate({ variables: { ...params } });
  };

  return { setExamples, data, loading, error };
};
