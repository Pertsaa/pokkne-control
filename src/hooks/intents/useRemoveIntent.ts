import { useMutation } from '@apollo/client';

import { REMOVE_INTENT } from '../../graphql/mutations';

export const useRemoveIntent = () => {
  const [mutate, { data, loading, error }] = useMutation<
    { removeIntent: boolean },
    { id: number }
  >(REMOVE_INTENT);

  const removeIntent = ({ id }: { id: number }) => {
    mutate({
      variables: { id },
      update: (cache) => {
        const entityId = cache.identify({ id, __typename: 'Intent' });
        cache.evict({ id: entityId });
        cache.gc();
      },
    });
  };

  return { removeIntent, data, loading, error };
};
