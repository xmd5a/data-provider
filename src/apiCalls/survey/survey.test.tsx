import { PostSurveyAnswerResponse } from '../../contracts/survey';
import { HttpClient } from '../../httpClient';
import {
  assertPostRequestCalledOnce,
  assertPostRequestReturnExpectedData,
  assertPostRequestThrowError,
} from '../../test';
import { surveyAnswer as mockedSurveyAnswer } from '../../mocks';

import { usePostSurveyAnswer } from './survey';

describe('survey', () => {
  describe('when usePostSurveyAnswer request is successfully resolved', () => {
    it('endpoint should be called once', () => {
      assertPostRequestCalledOnce<PostSurveyAnswerResponse>((httpClient: HttpClient) =>
        usePostSurveyAnswer(httpClient, mockedSurveyAnswer)
      );
    });

    it('endpoint should return proper data', async () => {
      assertPostRequestReturnExpectedData<PostSurveyAnswerResponse>(
        (httpClient: HttpClient) => usePostSurveyAnswer(httpClient, mockedSurveyAnswer),
        null
      );
    });
  });

  describe('when usePostSurveyAnswer request is rejected', () => {
    it('endpoint should throw an error as response', () => {
      assertPostRequestThrowError<PostSurveyAnswerResponse>((httpClient: HttpClient) =>
        usePostSurveyAnswer(httpClient, mockedSurveyAnswer)
      );
    });
  });
});
