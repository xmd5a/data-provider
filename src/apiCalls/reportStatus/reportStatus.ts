import { GetReportStatusResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { ApiGetService, useApiFactory } from '../../queryHooks';

const REPORT_STATUS_ENDPOINT = '/report-status';
const REPORT_QUERY_KEY = 'reportStatus';

const getReportStatus = (client: HttpClient) => ({
  queryKey: REPORT_QUERY_KEY,
  get: () => client.get<GetReportStatusResponse>(REPORT_STATUS_ENDPOINT).then(({ data }) => data),
});
const useGetReportStatus = (client: HttpClient) =>
  useApiFactory<ApiGetService<GetReportStatusResponse>>(client, getReportStatus);

export { REPORT_STATUS_ENDPOINT, useGetReportStatus };
