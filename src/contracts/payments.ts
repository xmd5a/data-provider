import { Money, Months, Parameters, Status } from './common';

export type GetPaymentsResponse = {
  payments: Array<{
    id: string;
    status: Status;
  }>;
};

export type PostPaymentsPayload = {
  money: Money;
  project_id: string;
  purpose: string;
  provider: 'fts';
  offset_co2: number;
  offset_month: Months;
};

export type PostPaymentsResponse = {
  payment_id: string;
  provider: string;
  payment_data: Parameters;
};
