import { GetProjectDetailsResponse, GetProjectFeaturedIdResponse, GetProjectsResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { ApiGetService, useApiFactory } from '../../queryHooks';

const PROJECTS_ENDPOINT = '/projects';
const PROJECTS_QUERY_KEY = 'projects';
const PROJECT_DETAIL_QUERY_KEY = 'projectDetail';
const PROJECT_FEATURED_ID_ENDPOINT = '/projects/featured/id';
const PROJECT_FEATURED_ID_QUERY_KEY = 'projectFeaturedId';

type GetProjectDetailsOptions = {
  params: {
    queryProjectId: string;
  };
};

const getProjectList = (client: HttpClient) => ({
  queryKey: PROJECTS_QUERY_KEY,
  get: () => client.get<GetProjectsResponse>(PROJECTS_ENDPOINT).then(({ data }) => data),
});
const useGetProjectList = (client: HttpClient) =>
  useApiFactory<ApiGetService<GetProjectsResponse>>(client, getProjectList);

const generateProjectDetailsEndpoint = (queryProjectId: string) => `/projects/${queryProjectId}/details`;
const getProjectDetails = (client: HttpClient, { params: { queryProjectId } }: GetProjectDetailsOptions) => ({
  queryKey: [PROJECT_DETAIL_QUERY_KEY, queryProjectId],
  get: () =>
    client.get<GetProjectDetailsResponse>(generateProjectDetailsEndpoint(queryProjectId)).then(({ data }) => data),
});
const useGetProjectDetails = (client: HttpClient, queryProjectId: string) =>
  useApiFactory<ApiGetService<GetProjectDetailsResponse>, GetProjectDetailsOptions>(client, getProjectDetails, {
    params: { queryProjectId },
  });

const getProjectFeaturedId = (client: HttpClient) => ({
  queryKey: PROJECT_FEATURED_ID_QUERY_KEY,
  get: () => client.get<GetProjectFeaturedIdResponse>(PROJECT_FEATURED_ID_ENDPOINT).then(({ data }) => data),
});
const useGetProjectFeaturedId = (client: HttpClient) =>
  useApiFactory<ApiGetService<GetProjectFeaturedIdResponse>>(client, getProjectFeaturedId);

export {
  PROJECTS_ENDPOINT,
  PROJECT_FEATURED_ID_ENDPOINT,
  generateProjectDetailsEndpoint,
  useGetProjectList,
  useGetProjectDetails,
  useGetProjectFeaturedId,
};
