import { rest } from 'msw';

import { PAYMENTS_ENDPOINT } from '../../apiCalls';
import { GetPaymentsResponse, PostPaymentsPayload, PostPaymentsResponse } from '../../contracts';
import { paymentStatusFailed, paymentStatusSuccess, postPaymentResponse } from '../../mocks/payments';

export const postPaymentSuccess = rest.post<PostPaymentsPayload, PostPaymentsResponse>(
  PAYMENTS_ENDPOINT,
  (_, res, ctx) => res.once(ctx.status(200), ctx.json(postPaymentResponse))
);

export const postPaymentFailed = rest.post<PostPaymentsPayload>(PAYMENTS_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const getPaymentSuccessStatusSuccess = rest.get<GetPaymentsResponse>(PAYMENTS_ENDPOINT, (_, res, ctx) =>
  res.once(ctx.delay(2000), ctx.status(200), ctx.json(paymentStatusSuccess))
);

export const getPaymentFailedStatusSuccess = rest.get<GetPaymentsResponse>(PAYMENTS_ENDPOINT, (_, res, ctx) =>
  res.once(ctx.delay(2000), ctx.status(200), ctx.json(paymentStatusFailed))
);

export const getPaymentStatusFailed = rest.get(PAYMENTS_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.delay(2000),
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const paymentsHandlers = [postPaymentSuccess, getPaymentSuccessStatusSuccess];
