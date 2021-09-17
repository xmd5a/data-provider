import { GetPaymentsResponse, PostPaymentsResponse } from '../contracts';

export const postPaymentResponse: PostPaymentsResponse = {
  payment_id: 'example-success-payment-id',
  provider: 'fts-mock',
  payment_data: [
    {
      key: 'FTS_WIZARD_SESSION_KEY',
      value: 'mock-1630480214374',
    },
    {
      key: 'FTS_TRANSACTION_ID',
      value: 'mock-1630480214375',
    },
  ],
};

export const paymentStatusSuccess: GetPaymentsResponse = {
  payments: [
    {
      id: 'example-success-payment-id',
      status: 'success',
    },
  ],
};

export const paymentStatusFailed: GetPaymentsResponse = {
  payments: [
    {
      id: 'example-failed-payment-id',
      status: 'failed',
    },
  ],
};
