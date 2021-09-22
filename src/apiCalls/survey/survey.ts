import { PostSurveyAnswerResponse, PostSurveyAnswerPayload } from '../../contracts/survey';
import { HttpClient } from '../../httpClient';
import { useApiFactory } from '../../queryHooks';

const SURVEY_ANSWER_ENDPOINT = '/survey/answer';
const SURVEY_QUERY_KEY = 'survey';

type PostSurveyAnswerOptions = {
  payload: PostSurveyAnswerPayload;
};

const postSurveyAnswer = (client: HttpClient, { payload }: PostSurveyAnswerOptions) => ({
  queryKey: SURVEY_QUERY_KEY,
  post: () =>
    client
      .post<PostSurveyAnswerPayload, PostSurveyAnswerResponse>(SURVEY_ANSWER_ENDPOINT, payload)
      .then(({ data }) => data),
});
const usePostSurveyAnswer = (client: HttpClient, postSurveyAnswerPayload: PostSurveyAnswerPayload) =>
  useApiFactory(client, postSurveyAnswer, {
    payload: postSurveyAnswerPayload,
  });

export { SURVEY_ANSWER_ENDPOINT, usePostSurveyAnswer };
