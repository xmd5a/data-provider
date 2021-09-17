import { Categories } from '../contracts';

import { generateBasicEndpoint } from './generateBasicEndpoint';

export const generateEndpointWithCategoriesParam = (categories: Categories[]) => (endpoint: string) =>
  categories.length > 0
    ? `${generateBasicEndpoint(endpoint)}${categories.map((category) => `category=${category}`).join('&')}`
    : endpoint;
