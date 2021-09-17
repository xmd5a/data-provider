import { GetPaymentsResponse, PostPaymentsPayload, PostPaymentsResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { paymentStatusSuccess, postPaymentResponse } from '../../mocks';
import {
  assertGetRequestCalledOnce,
  assertGetRequestReturnExpectedData,
  assertGetRequestThrowError,
  assertPostRequestCalledOnce,
  assertPostRequestReturnExpectedData,
  assertPostRequestThrowError,
} from '../../test';

import { useGetPayment, usePostPayment } from './payments';

const postPaymentPayload: PostPaymentsPayload = {
  money: {
    amount: 10,
    currency: 'EUR',
  },
  offset_co2: 1000,
  offset_month: '-1',
  project_id: '1',
  provider: 'fts',
  purpose: 'title 1, 1, myclimate',
};

describe('payments', () => {
  describe('useGetPayment', () => {
    it('endpoint should be called once', () => {
      assertGetRequestCalledOnce<GetPaymentsResponse>((httpClient: HttpClient) => useGetPayment(httpClient));
    });

    it('endpoint should return proper data', () => {
      assertGetRequestReturnExpectedData<GetPaymentsResponse>(
        (httpClient: HttpClient) => useGetPayment(httpClient),
        paymentStatusSuccess
      );
    });

    it('endpoint should throw an error as response', () => {
      assertGetRequestThrowError<GetPaymentsResponse>((httpClient: HttpClient) => useGetPayment(httpClient));
    });
  });

  describe('usePostPayment', () => {
    it('endpoint should be called once', () => {
      assertPostRequestCalledOnce<PostPaymentsResponse>((httpClient: HttpClient) =>
        usePostPayment(httpClient, postPaymentPayload)
      );
    });

    it('endpoint should return proper data', () => {
      assertPostRequestReturnExpectedData<PostPaymentsResponse>(
        (httpClient: HttpClient) => usePostPayment(httpClient, postPaymentPayload),
        postPaymentResponse
      );
    });

    it('endpoint should throw an error as response', () => {
      assertPostRequestThrowError<PostPaymentsResponse>((httpClient: HttpClient) =>
        usePostPayment(httpClient, postPaymentPayload)
      );
    });
  });
});
