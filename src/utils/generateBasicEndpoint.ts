import { isFirstParamInEndpointDefined } from './isFirstParamInEndpointDefined';

export const generateBasicEndpoint = (endpoint: string) =>
  isFirstParamInEndpointDefined(endpoint) ? `${endpoint}&` : `${endpoint}?`;
