import { GetReportStatusResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { reportStatusCompleted } from '../../mocks';
import { assertGetRequestReturnExpectedData, assertGetRequestThrowError } from '../../test';

import { useGetReportStatus } from './reportStatus';

describe('reportStatus', () => {
  describe('when useGetReportStatus request is successfully resolved', () => {
    describe('endpoint should be called', () => {
      jest.useFakeTimers();

      it('should return proper data', () => {
        const expectedResponse = reportStatusCompleted;
        assertGetRequestReturnExpectedData<GetReportStatusResponse>(
          (httpClient: HttpClient) => useGetReportStatus(httpClient),
          expectedResponse
        );
      });
    });
  });
  describe('when useGetReportStatus request is rejected', () => {
    it('should throw an error as response', () => {
      assertGetRequestThrowError<GetReportStatusResponse>((httpClient: HttpClient) => useGetReportStatus(httpClient));
    });
  });
});
