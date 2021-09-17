export const isFirstParamInEndpointDefined = (endpoint: string) => !!endpoint.match(/\/[a-zA-Z0-9]+\?[a-zA-Z0-9]+\=/);
