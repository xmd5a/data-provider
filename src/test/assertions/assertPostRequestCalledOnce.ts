import { renderHook } from '@testing-library/react-hooks/dom';

import { HttpClient } from '../../httpClient';
import { ApiPostService } from '../../queryHooks';
import { TestHttpClient } from '../TestHttpClient';

export const assertPostRequestCalledOnce = async <DataResponse>(
  hook: (client: HttpClient) => ApiPostService<DataResponse>
) => {
  const client = TestHttpClient();
  const hookWithClient = () => hook(client);
  const {
    result: {
      current: { post, queryKey },
    },
  } = renderHook(hookWithClient);

  await post({ queryKey: [queryKey] });

  expect(client.post).toHaveBeenCalledTimes(1);
};
