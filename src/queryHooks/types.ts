import { MutationFunction, QueryFunction, QueryKey } from 'react-query';

export type ApiService<DataResponse> = {
  queryKey: QueryKey;
  get: QueryFunction<DataResponse>;
  post: MutationFunction<DataResponse>;
};

export type ApiPostService<DataResponse> = Pick<ApiService<DataResponse>, 'queryKey' | 'post'>;

export type ApiGetService<DataResponse> = Pick<ApiService<DataResponse>, 'queryKey' | 'get'>;
