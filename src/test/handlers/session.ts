import { rest } from 'msw';

import { SESSION_ENDPOINT } from '../../apiCalls';
import { PostSessionPayload, PostSessionResponse } from '../../contracts';
import { session as mockedSession } from '../../mocks/session';

const getSessionSuccess = rest.post<PostSessionPayload, PostSessionResponse>(SESSION_ENDPOINT, (_, res, ctx) =>
  res(ctx.json(mockedSession))
);

export const sessionHandlers = [getSessionSuccess];
