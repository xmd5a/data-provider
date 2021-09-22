import { Months } from '../contracts';

import { generateBasicEndpoint } from './generateBasicEndpoint';

export const generateEndpointWithMonthParam = (months: Months[]) => (endpoint: string) =>
  months.length > 0
    ? `${generateBasicEndpoint(endpoint)}${months.map((month) => `month=${month}`).join('&')}`
    : endpoint;
