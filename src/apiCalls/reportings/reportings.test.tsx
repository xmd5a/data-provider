import { GetFootprintsResponse, GetOffsetDetailsResponse, GetOffsetResponse, Months } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { createMockedOffsets, createMockedOffsetsDetails, reportingsFootprints } from '../../mocks';
import { assertGetRequestCalledOnce, assertGetRequestReturnExpectedData, assertGetRequestThrowError } from '../../test';

import { useGetOffsets, useGetOffsetsDetails, useGetReportingsFootprints } from './reportings';

describe('reportings', () => {
  const months = ['-1', '-2'] as Months[];

  describe('when useGetReportingsFootprints request is successfully resolved', () => {
    it('endpoint should be called once', () => {
      assertGetRequestCalledOnce<GetFootprintsResponse>((httpClient: HttpClient) =>
        useGetReportingsFootprints(httpClient)
      );
    });

    it('should return proper data', () => {
      const expectedResponse = reportingsFootprints;
      assertGetRequestReturnExpectedData<GetFootprintsResponse>(
        (httpClient: HttpClient) => useGetReportingsFootprints(httpClient),
        expectedResponse
      );
    });
  });

  describe('when useGetReportingsFootprints request is rejected', () => {
    it('should throw an error as response', () => {
      assertGetRequestThrowError<GetFootprintsResponse>((httpClient: HttpClient) =>
        useGetReportingsFootprints(httpClient)
      );
    });
  });

  describe('when useGetOffsets request is successfully resolved', () => {
    it('endpoint should be called once', () => {
      assertGetRequestCalledOnce<GetOffsetResponse>((httpClient: HttpClient) => useGetOffsets(httpClient, months));
    });

    it('should return proper data', () => {
      const expectedResponse = createMockedOffsets(months);
      assertGetRequestReturnExpectedData<GetOffsetResponse>(
        (httpClient: HttpClient) => useGetOffsets(httpClient, months),
        expectedResponse
      );
    });
  });

  describe('when useGetOffsets request is rejected', () => {
    it('should throw an error as response', () => {
      assertGetRequestThrowError<GetOffsetResponse>((httpClient: HttpClient) => useGetOffsets(httpClient, months));
    });
  });

  describe('when useGetOffsetsDetails request is successfully resolved', () => {
    it('endpoint should be called once', () => {
      assertGetRequestCalledOnce<GetOffsetDetailsResponse>((httpClient: HttpClient) =>
        useGetOffsetsDetails(httpClient, months)
      );
    });

    it('should return proper data', () => {
      const expectedResponse = createMockedOffsetsDetails(months);
      assertGetRequestReturnExpectedData<GetOffsetDetailsResponse>(
        (httpClient: HttpClient) => useGetOffsetsDetails(httpClient, months),
        expectedResponse
      );
    });
  });

  describe('when useGetOffsetsDetails request is rejected', () => {
    it('should throw an error as response', () => {
      assertGetRequestThrowError<GetOffsetDetailsResponse>((httpClient: HttpClient) =>
        useGetOffsetsDetails(httpClient, months)
      );
    });
  });
});
