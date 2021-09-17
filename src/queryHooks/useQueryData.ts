import { useQuery, UseQueryOptions } from 'react-query';

import { ApiGetService } from './types';

export const useQueryData = <DataResponse>(
  apiService: ApiGetService<DataResponse>,
  options?: UseQueryOptions<DataResponse, Error>
) => useQuery<DataResponse, Error>(apiService.queryKey, apiService.get, options);
