import { renderHook } from '@testing-library/react-hooks/dom';

import { HttpClient } from '../../httpClient';
import { ApiGetService } from '../../queryHooks';
import { TestHttpClient } from '../TestHttpClient';

export const assertGetRequestReturnExpectedData = async <DataResponse>(
  hook: (client: HttpClient) => ApiGetService<DataResponse>,
  expectedResponse: DataResponse
) => {
  const client = TestHttpClient({ get: expectedResponse });
  const hookWithClient = () => hook(client);
  const {
    result: {
      current: { get, queryKey },
    },
  } = renderHook(hookWithClient);
  const apiResponse = await get({ queryKey: [queryKey] });

  expect(apiResponse).toBe(expectedResponse);
};
