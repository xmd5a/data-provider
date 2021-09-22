import { HttpClient } from '../httpClient';

export const useApiFactory = <ApiServiceWithResponse, ApiServiceOptions = {}>(
  client: HttpClient,
  api: (client: HttpClient, options: ApiServiceOptions) => ApiServiceWithResponse,
  options = {}
) => api(client, options as ApiServiceOptions);
