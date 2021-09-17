import { rest } from 'msw';

import {
  REPORTINGS_FOOTPRINTS_DETAILS_ENDPOINT,
  REPORTINGS_FOOTPRINTS_ENDPOINT,
  REPORTINGS_OFFSETS_DETAILS_ENDPOINT,
  REPORTINGS_OFFSETS_ENDPOINT,
  REPORT_STATUS_ENDPOINT,
} from '../../apiCalls';
import {
  Categories,
  GetFootprintsDetailsPayload,
  GetFootprintsDetailsResponse,
  GetFootprintsPayload,
  GetFootprintsResponse,
  GetOffsetDetailsPayload,
  GetOffsetDetailsResponse,
  GetOffsetPayload,
  GetOffsetResponse,
  GetReportStatusResponse,
  Months,
} from '../../contracts';
import {
  createMockedOffsets,
  createMockedOffsetsDetails,
  createReportingsFootprintsDetailsPerMonth,
  createReportingsFootprintsDetailsPerMonthPerCategory,
  offsetsDetailsEmptyTransactions_1 as mockedOffsetsDetailsEmptyTransactions_1,
  reportingsFootprints as mockedReportingsFootprints,
  reportStatusCompleted as mockedReportStatusCompleted,
} from '../../mocks/reportings';

const getOffsetsSuccess = rest.get<GetOffsetPayload, GetOffsetResponse>(
  REPORTINGS_OFFSETS_ENDPOINT,
  (req, res, ctx) => {
    const {
      url: { searchParams },
    } = req;
    const months = searchParams.getAll('month') as Months[];

    return res(ctx.json(createMockedOffsets(months)));
  }
);

const getOffsetsDetailsSuccess = rest.get<GetOffsetDetailsPayload, GetOffsetDetailsResponse>(
  REPORTINGS_OFFSETS_DETAILS_ENDPOINT,
  (req, res, ctx) => {
    const {
      url: { searchParams },
    } = req;
    const months = searchParams.getAll('month') as Months[];

    return res(ctx.json(createMockedOffsetsDetails(months)));
  }
);

const getFootprints = rest.get<GetFootprintsPayload, GetFootprintsResponse>(
  REPORTINGS_FOOTPRINTS_ENDPOINT,
  (_, res, ctx) => res(ctx.json(mockedReportingsFootprints))
);

const getFootprintsDetails = rest.get<GetFootprintsDetailsPayload, GetFootprintsDetailsResponse>(
  REPORTINGS_FOOTPRINTS_DETAILS_ENDPOINT,
  (req, res, ctx) => {
    const {
      url: { searchParams },
    } = req;
    const month = searchParams.get('month') as Months;
    const categories = searchParams.getAll('category') as Categories[];

    if (month && categories.length > 0) {
      return res(ctx.json(createReportingsFootprintsDetailsPerMonthPerCategory(month, categories)));
    }

    return res(ctx.json(createReportingsFootprintsDetailsPerMonth(month)));
  }
);

const getReportStatusCompleted = rest.get<GetReportStatusResponse>(REPORT_STATUS_ENDPOINT, (_, res, ctx) =>
  res(ctx.json(mockedReportStatusCompleted))
);

export const getEmptyTransactionsOffsetsDetailsSuccess = rest.get<GetOffsetDetailsPayload, GetOffsetDetailsResponse>(
  REPORTINGS_OFFSETS_DETAILS_ENDPOINT,
  (_, res, ctx) => res(ctx.json(mockedOffsetsDetailsEmptyTransactions_1))
);

export const getOffsetsFailed = rest.get(REPORTINGS_OFFSETS_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const getOffsetsDetailsFailed = rest.get(REPORTINGS_OFFSETS_DETAILS_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const getFootprintsFailed = rest.get(REPORTINGS_FOOTPRINTS_ENDPOINT, (_, res, ctx) =>
  res.once(
    ctx.status(403),
    ctx.json({
      messages: 'Forbidden access',
    })
  )
);

export const reportingsHandlers = [
  getOffsetsDetailsSuccess,
  getOffsetsSuccess,
  getFootprints,
  getFootprintsDetails,
  getReportStatusCompleted,
];
