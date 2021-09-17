import { pipe } from 'ramda';

import {
  Categories,
  GetFootprintsDetailsResponse,
  GetFootprintsResponse,
  GetOffsetDetailsResponse,
  GetOffsetResponse,
  Months,
} from '../../contracts';
import { HttpClient } from '../../httpClient';
import { ApiGetService, useApiFactory } from '../../queryHooks';
import { generateEndpointWithCategoriesParam, generateEndpointWithMonthParam } from '../../utils';

const REPORTINGS_FOOTPRINTS_ENDPOINT = '/reportings/footprints';
const REPORTINGS_FOOTPRINTS_QUERY_KEY = 'footprints';
const REPORTINGS_FOOTPRINTS_DETAILS_ENDPOINT = '/reportings/footprints/details';
const REPORTINGS_FOOTPRINTS_DETAILS_QUERY_KEY = 'footprintsDetails';
const REPORTINGS_OFFSETS_ENDPOINT = '/reportings/offsets';
const REPORTINGS_OFFSETS_QUERY_KEY = 'offsets';
const REPORTINGS_OFFSETS_DETAILS_ENDPOINT = '/reportings/offsets/details';
const REPORTINGS_OFFSETS_DETAILS_QUERY_KEY = 'offsetsDetails';

type GetReportingsFootprintsDetailsOptions = {
  params: {
    month: Months;
    categories: Categories[];
  };
};

type GetOffsetsOptions = {
  params: {
    months: Months[];
  };
};

const getReportingsFootprints = (client: HttpClient) => ({
  queryKey: REPORTINGS_FOOTPRINTS_QUERY_KEY,
  get: () => client.get<GetFootprintsResponse>(REPORTINGS_FOOTPRINTS_ENDPOINT).then(({ data }) => data),
});
const useGetReportingsFootprints = (client: HttpClient) =>
  useApiFactory<ApiGetService<GetFootprintsResponse>>(client, getReportingsFootprints);

const getReportingsFootprintsDetails = (
  client: HttpClient,
  { params: { month, categories } }: GetReportingsFootprintsDetailsOptions
) => ({
  queryKey: [REPORTINGS_FOOTPRINTS_DETAILS_QUERY_KEY, month, ...categories],
  get: () =>
    client
      .get<GetFootprintsDetailsResponse>(
        pipe(
          generateEndpointWithMonthParam([month]),
          generateEndpointWithCategoriesParam(categories)
        )(REPORTINGS_FOOTPRINTS_DETAILS_ENDPOINT)
      )
      .then(({ data }) => data),
});
const useGetReportingsFootprintsDetails = (client: HttpClient, month: Months, categories: Categories[]) =>
  useApiFactory<ApiGetService<GetFootprintsDetailsResponse>, GetReportingsFootprintsDetailsOptions>(
    client,
    getReportingsFootprintsDetails,
    {
      params: { month, categories },
    }
  );

const getOffsets = (client: HttpClient, { params: { months } }: GetOffsetsOptions) => ({
  queryKey: [REPORTINGS_OFFSETS_QUERY_KEY, ...months],
  get: () =>
    client
      .get<GetOffsetResponse>(generateEndpointWithMonthParam(months)(REPORTINGS_OFFSETS_ENDPOINT))
      .then(({ data }) => data),
});
const useGetOffsets = (client: HttpClient, months: Months[]) =>
  useApiFactory<ApiGetService<GetOffsetResponse>, GetOffsetsOptions>(client, getOffsets, {
    params: { months },
  });

const getOffsetsDetails = (client: HttpClient, { params: { months } }: GetOffsetsOptions) => ({
  queryKey: [REPORTINGS_OFFSETS_DETAILS_QUERY_KEY, ...months],
  get: () =>
    client
      .get<GetOffsetDetailsResponse>(generateEndpointWithMonthParam(months)(REPORTINGS_OFFSETS_DETAILS_ENDPOINT))
      .then(({ data }) => data),
});
const useGetOffsetsDetails = (client: HttpClient, months: Months[]) =>
  useApiFactory<ApiGetService<GetOffsetDetailsResponse>, GetOffsetsOptions>(client, getOffsetsDetails, {
    params: { months },
  });

export {
  REPORTINGS_FOOTPRINTS_ENDPOINT,
  REPORTINGS_FOOTPRINTS_DETAILS_ENDPOINT,
  REPORTINGS_OFFSETS_DETAILS_ENDPOINT,
  REPORTINGS_OFFSETS_ENDPOINT,
  useGetReportingsFootprints,
  useGetReportingsFootprintsDetails,
  useGetOffsetsDetails,
  useGetOffsets,
};
