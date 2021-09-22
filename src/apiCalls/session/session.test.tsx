import { renderHook } from '@testing-library/react-hooks/dom';

import { PostSessionResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { session } from '../../mocks';
import { assertPostRequestReturnExpectedData, assertPostRequestThrowError, TestHttpClient } from '../../test';

import { useGetSession } from './session';

describe('session', () => {
  describe('when useGetSession request is successfully resolved', () => {
    const expectedResponse = session;
    const client = TestHttpClient<PostSessionResponse>({ post: expectedResponse });

    it('endpoint should be called once', async () => {
      const {
        result: {
          current: { post },
        },
      } = renderHook(() => useGetSession(client));
      await post();

      expect(client.post).toHaveBeenCalledTimes(1);
    });

    it('should return proper data', () => {
      assertPostRequestReturnExpectedData<PostSessionResponse>(
        (httpClient: HttpClient) => useGetSession(httpClient),
        expectedResponse
      );
    });
  });

  describe('when useGetSession request is rejected', () => {
    it('should throw an error as response', () => {
      assertPostRequestThrowError<PostSessionResponse>((httpClient: HttpClient) => useGetSession(httpClient));
    });
  });
});
