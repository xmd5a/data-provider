import { renderHook } from '@testing-library/react-hooks/dom';

import { HttpClient } from '../../httpClient';
import { ApiPostService } from '../../queryHooks';
import { TestHttpClient } from '../TestHttpClient';

import { EXPECTED_RESPONSE } from './constants';

export const assertPostRequestThrowError = async <DataResponse>(
  hook: (client: HttpClient) => ApiPostService<DataResponse>
) => {
  let apiResponse;
  const client = TestHttpClient({ post: EXPECTED_RESPONSE });
  const hookWithClient = () => hook(client);
  const {
    result: {
      current: { post, queryKey },
    },
  } = renderHook(hookWithClient);

  try {
    apiResponse = await post({ queryKey: [queryKey] });
  } catch (error) {
    expect(apiResponse).toBe(EXPECTED_RESPONSE);
  }
};
