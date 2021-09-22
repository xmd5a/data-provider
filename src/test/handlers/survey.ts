import { rest } from 'msw';

import { PostSurveyAnswerPayload } from '../../contracts';
import { SURVEY_ANSWER_ENDPOINT } from '../../apiCalls';

const postSurveyAnswerSuccess = rest.post<PostSurveyAnswerPayload>(SURVEY_ANSWER_ENDPOINT, (_, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      messages: 'OK',
    })
  )
);

export const postSurveyAnswerFailed = rest.post<PostSurveyAnswerPayload>(SURVEY_ANSWER_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const surveyHandlers = [postSurveyAnswerSuccess];
