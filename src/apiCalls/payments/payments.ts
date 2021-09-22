import { GetPaymentsResponse, PostPaymentsPayload, PostPaymentsResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { ApiGetService, ApiPostService, useApiFactory } from '../../queryHooks';

const PAYMENTS_ENDPOINT = '/payments';
const POST_PAYMENT_QUERY_KEY = 'postPayment';
const PAYMENT_STATUS_QUERY_KEY = 'paymentStatus';

type PostPaymentOptions = {
  payload: PostPaymentsPayload;
};

const postPayment = (client: HttpClient, { payload }: PostPaymentOptions) => ({
  queryKey: POST_PAYMENT_QUERY_KEY,
  post: () =>
    client
      .post<PostPaymentsPayload, PostPaymentsResponse>(PAYMENTS_ENDPOINT, { ...payload })
      .then(({ data }) => data),
});
const usePostPayment = (client: HttpClient, postPaymentsPayload: PostPaymentsPayload) => {
  return useApiFactory<ApiPostService<PostPaymentsResponse>, PostPaymentOptions>(client, postPayment, {
    payload: postPaymentsPayload,
  });
};

const getPayment = (client: HttpClient) => ({
  queryKey: PAYMENT_STATUS_QUERY_KEY,
  get: () => client.get<GetPaymentsResponse>(PAYMENTS_ENDPOINT).then(({ data }) => data),
});
const useGetPayment = (client: HttpClient) => useApiFactory<ApiGetService<GetPaymentsResponse>>(client, getPayment);

export { PAYMENTS_ENDPOINT, usePostPayment, useGetPayment };
