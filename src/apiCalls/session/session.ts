import { PostSessionResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { useApiFactory } from '../../queryHooks';

const SESSION_ENDPOINT = '/sessions';
const SESSION_QUERY_KEY = 'session';

const getSession = (client: HttpClient) => ({
  queryKey: SESSION_QUERY_KEY,
  post: () =>
    client
      .post<{}, PostSessionResponse>(SESSION_ENDPOINT, {}, { headers: { 'Content-Type': 'application/json' } })
      .then(({ data }) => {
        client.setInterceptor(({ headers, ...restRequestConfig }) => {
          const { session_token } = data;

          return {
            ...restRequestConfig,
            headers: { ...headers, 'X-Ecolytiq-Session': session_token },
          };
        });

        return data;
      }),
});
const useGetSession = (client: HttpClient) => useApiFactory(client, getSession);

export { SESSION_ENDPOINT, useGetSession };
