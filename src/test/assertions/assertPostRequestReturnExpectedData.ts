import { renderHook } from '@testing-library/react-hooks/dom';

import { HttpClient } from '../../httpClient';
import { ApiPostService } from '../../queryHooks';
import { TestHttpClient } from '../TestHttpClient';

export const assertPostRequestReturnExpectedData = async <DataResponse>(
  hook: (client: HttpClient) => ApiPostService<DataResponse>,
  expectedResponse: DataResponse
) => {
  const client = TestHttpClient({ post: expectedResponse });
  const hookWithClient = () => hook(client);
  const {
    result: {
      current: { post, queryKey },
    },
  } = renderHook(hookWithClient);
  const apiResponse = await post({ queryKey: [queryKey] });

  expect(apiResponse).toBe(expectedResponse);
};
