import { Money, Months } from './common';

type ReportStatus = 'completed' | 'error' | 'pending';

export type ComparableDetails = {
  trees_to_plant: number;
  packages_delivered: number;
  cows_annually: number;
  dishwasher_runs: number;
};

type FootprintGenericPayload = {
  category: Array<string>;
  month: Array<string>;
};

export type GroupByCategoryFootprintResponse = {
  [K in Categories]: Footprint;
};

type GroupByMonthFootprintResponse = {
  [K in Months]: {
    all: Footprint;
    grouped_by_category: GroupByCategoryFootprintResponse;
  };
};

type GroupByMonthFootprintDetailsResponse = {
  [K in Months]?: FootprintDetailsResponse;
};

type OffsetGenericPayload = Omit<FootprintGenericPayload, 'category'>;

export type TransactionOffsetResponse = {
  id: string;
  date: string;
  money: Money;
  name: string;
  description: string;
  offset: number;
};

export type TransactionFootprintResponse = {
  id: string;
  date: string;
  money: Money;
  description: string;
  footprint: Footprint;
};

export type Footprint = {
  co2: number;
  co2_ratio: number;
  extrapolated?: boolean;
};

export type Categories = 'food' | 'living' | 'travel' | 'shopping' | 'other';

export type MonthlyFootprintDetails = {
  all: Footprint;
  delta_previous_month?: Footprint;
};

export type FootprintDetailsResponse = {
  transactions: Array<TransactionFootprintResponse>;
  footprint: MonthlyFootprintDetails;
};

export type GetReportStatusResponse = {
  status: ReportStatus;
  status_description?: string;
};

export type GetFootprintsPayload = FootprintGenericPayload;

export type GroupByCategoryComparableDetails = {
  [K in Categories]: ComparableDetails;
};

export type GetFootprintsResponse = {
  footprints: {
    all: Footprint;
    grouped_by_category: GroupByCategoryFootprintResponse;
    grouped_by_month: GroupByMonthFootprintResponse;
  };
  comparables: GroupByCategoryComparableDetails;
  peers: {
    co2_annually: Footprint;
  };
};

export type GetFootprintsDetailsPayload = FootprintGenericPayload;

export type GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    [K in Categories]?: GroupByMonthFootprintDetailsResponse;
  };
};

export type GetOffsetPayload = OffsetGenericPayload;

export type GetOffsetResponse = {
  offsets: {
    all: number;
    grouped_by_month: {
      [K in Months]?: number;
    };
  };
};

export type GetOffsetDetailsPayload = OffsetGenericPayload;

export type OffsetDetailsResponse = {
  transactions: Array<TransactionOffsetResponse>;
  offset: number;
};

export type GetOffsetDetailsResponse = {
  grouped_by_month: {
    [K in Months]?: OffsetDetailsResponse;
  };
};
