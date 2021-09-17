import { renderHook } from '@testing-library/react-hooks/dom';

import { HttpClient } from '../../httpClient';
import { ApiGetService } from '../../queryHooks';
import { TestHttpClient } from '../TestHttpClient';

import { EXPECTED_RESPONSE } from './constants';

export const assertGetRequestThrowError = async <DataResponse>(
  hook: (client: HttpClient) => ApiGetService<DataResponse>
) => {
  let apiResponse;
  const client = TestHttpClient({ get: EXPECTED_RESPONSE });
  const hookWithClient = () => hook(client);
  const {
    result: {
      current: { get, queryKey },
    },
  } = renderHook(hookWithClient);

  try {
    apiResponse = await get({ queryKey: [queryKey] });
  } catch (error) {
    expect(apiResponse).toBe(EXPECTED_RESPONSE);
  }
};
