import { useQueryClient } from 'react-query';
import _ from 'lodash';

function useQueryClientCustom() {
  const queryClient = useQueryClient();

  type QueryClientItem = {
    id: string;
  };

  function queryClientGet<T = unknown>(queryKey: string) {
    return queryClient.getQueryData<T>(queryKey);
  }

  function queryClientFind<T = unknown>(
    queryKey: string,
    options: { key?: string; value: string | number }
  ) {
    const data = queryClientGet<T[]>(queryKey) || [];
    // @ts-ignore
    return _.find(data, (d) => d[options.key || 'id'] === options.value);
  }

  function queryClientAdd<T = unknown>(queryKey: string, item: T) {
    const previousData = queryClientGet<T[]>(queryKey) || [];
    queryClient.setQueryData(queryKey, [...previousData, item]);
  }

  function queryClientRemove<T = unknown>(queryKey: string, item: T) {
    const previousData = queryClientGet<T[]>(queryKey) || [];
    queryClient.setQueryData(
      queryKey,
      // @ts-ignore
      _.filter(previousData, (d: QueryClientItem) => d.id && d.id !== item?.id)
    );
  }

  function queryClientUpdate<T = unknown>(queryKey: string, item: T) {
    const previousData = queryClientGet<T[]>(queryKey) || [];
    queryClient.setQueryData(
      queryKey,
      _.map(previousData, (d: QueryClientItem) =>
        // @ts-ignore
        d.id && d.id === item?.id ? item : d
      )
    );
  }

  return {
    queryClientGet,
    queryClientFind,
    queryClientAdd,
    queryClientRemove,
    queryClientUpdate,
  };
}

export default useQueryClientCustom;
