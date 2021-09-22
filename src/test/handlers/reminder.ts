import { rest } from 'msw';

import { REMINDER_ENDPOINT } from '../../apiCalls';
import { GetReminderResponse } from '../../contracts';
import { reminderHidden, reminderVisible } from '../../mocks/reminder';

const getReminderSuccess = rest.get<GetReminderResponse>(REMINDER_ENDPOINT, (_, res, ctx) =>
  res(ctx.json(reminderHidden))
);

export const getReminderVisibleSuccess = rest.get<GetReminderResponse>(REMINDER_ENDPOINT, (_, res, ctx) =>
  res(ctx.json(reminderVisible))
);

export const getReminderFailed = rest.get(REMINDER_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const postReminderSuccess = rest.post(REMINDER_ENDPOINT, (_, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      messages: 'OK',
    })
  )
);

export const postReminderFailed = rest.post(REMINDER_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const reminderHandlers = [getReminderSuccess, postReminderSuccess];
