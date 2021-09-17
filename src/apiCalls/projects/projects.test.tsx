import { GetProjectFeaturedIdResponse, GetProjectsResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { projectFeaturedId, projectsList } from '../../mocks';
import { assertGetRequestCalledOnce, assertGetRequestReturnExpectedData, assertGetRequestThrowError } from '../../test';

import { useGetProjectFeaturedId, useGetProjectList } from './projects';

describe('projects', () => {
  describe('when useGetProjectList request', () => {
    describe('is successfully resolved', () => {
      it('endpoint should be called once', () => {
        assertGetRequestCalledOnce<GetProjectsResponse>((httpClient: HttpClient) => useGetProjectList(httpClient));
      });

      it('should return proper data', () => {
        const expectedResponse = projectsList;
        assertGetRequestReturnExpectedData<GetProjectsResponse>(
          (httpClient: HttpClient) => useGetProjectList(httpClient),
          expectedResponse
        );
      });
    });

    describe('is rejected', () => {
      it('should throw an error as response', () => {
        assertGetRequestThrowError<GetProjectsResponse>((httpClient: HttpClient) => useGetProjectList(httpClient));
      });
    });
  });

  describe('when useGetProjectFeaturedId request', () => {
    describe('is successfully resolved', () => {
      it('endpoint should be called once', () => {
        assertGetRequestCalledOnce<GetProjectFeaturedIdResponse>((httpClient: HttpClient) =>
          useGetProjectFeaturedId(httpClient)
        );
      });

      it('should return proper data', () => {
        const expectedResponse = projectFeaturedId;
        assertGetRequestReturnExpectedData<GetProjectFeaturedIdResponse>(
          (httpClient: HttpClient) => useGetProjectFeaturedId(httpClient),
          expectedResponse
        );
      });
    });

    describe('is rejected', () => {
      it('should throw an error as response', () => {
        assertGetRequestThrowError<GetProjectFeaturedIdResponse>((httpClient: HttpClient) =>
          useGetProjectFeaturedId(httpClient)
        );
      });
    });
  });
});
