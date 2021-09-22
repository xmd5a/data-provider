import { renderHook } from '@testing-library/react-hooks/dom';

import { GetReminderResponse, PostReminderResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { reminderVisible } from '../../mocks';
import {
  assertGetRequestCalledOnce,
  assertGetRequestReturnExpectedData,
  assertGetRequestThrowError,
  assertPostRequestCalledOnce,
  assertPostRequestThrowError,
  TestHttpClient,
} from '../../test';

import { useGetReminder, usePostReminder } from './reminder';

describe('reminder', () => {
  describe('when useGetReminder request is successfully resolved', () => {
    it('endpoint should be called once', () => {
      assertGetRequestCalledOnce<GetReminderResponse>((httpClient: HttpClient) => useGetReminder(httpClient));
    });

    it('should return proper data', () => {
      const expectedResponse = reminderVisible;
      assertGetRequestReturnExpectedData<GetReminderResponse>(
        (httpClient: HttpClient) => useGetReminder(httpClient),
        expectedResponse
      );
    });
  });

  describe('when useGetReminder request is rejected', () => {
    it('should throw an error as response', () => {
      assertGetRequestThrowError<GetReminderResponse>((httpClient: HttpClient) => useGetReminder(httpClient));
    });
  });

  describe('when usePostReminder request is successfully resolved', () => {
    it('endpoint should be called once', () => {
      assertPostRequestCalledOnce<PostReminderResponse>((httpClient: HttpClient) => usePostReminder(httpClient));
    });

    it('should return proper data', async () => {
      const client = TestHttpClient<PostReminderResponse>({ post: null });
      const { result } = renderHook(() => usePostReminder(client));
      const apiResponse = await result.current.post();

      expect(apiResponse).toBe(null);
    });
  });

  describe('when usePostReminder request is rejected', () => {
    it('should throw an error as response', () => {
      assertPostRequestThrowError<PostReminderResponse>((httpClient: HttpClient) => usePostReminder(httpClient));
    });
  });
});
