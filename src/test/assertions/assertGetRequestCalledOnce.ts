import { renderHook } from '@testing-library/react-hooks/dom';

import { HttpClient } from '../../httpClient';
import { ApiGetService } from '../../queryHooks';
import { TestHttpClient } from '../TestHttpClient';

export const assertGetRequestCalledOnce = async <DataResponse>(
  hook: (client: HttpClient) => ApiGetService<DataResponse>
) => {
  const client = TestHttpClient();
  const hookWithClient = () => hook(client);
  const {
    result: {
      current: { get, queryKey },
    },
  } = renderHook(hookWithClient);

  await get({ queryKey: [queryKey] });

  expect(client.get).toHaveBeenCalledTimes(1);
};
