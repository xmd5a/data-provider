import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';

import { ApiPostService } from './types';

export const useMutateData = <DataResponse>(
  apiService: ApiPostService<DataResponse>,
  options?: UseMutationOptions<DataResponse, Error>
) => {
  const queryCache = useQueryClient();

  return useMutation<DataResponse, Error>(apiService.queryKey, apiService.post, {
    ...options,
    onSuccess: (newData, variables, context) => {
      queryCache.setQueryData(apiService.queryKey, (currentData) => {
        if (Array.isArray(currentData)) {
          return [...currentData, newData];
        }

        return newData;
      });

      options?.onSuccess?.(newData, variables, context);
    },
  });
};
