import { HttpClient, RequestConfig } from '../httpClient';

type HttpClientResponses<ResponseType> = {
  get?: ResponseType;
  post?: ResponseType;
};

export const TestHttpClient = <ApiResponses>(response?: HttpClientResponses<ApiResponses>): HttpClient => {
  const getResponse = jest.fn().mockResolvedValue({ data: response?.get });
  const postResponse = jest.fn().mockResolvedValue({ data: response?.post });
  const setInterceptorResponse = jest.fn().mockImplementation((callback) => callback({} as RequestConfig));
  const removeInterceptorResponse = jest.fn();

  return {
    get: getResponse,
    post: postResponse,
    setInterceptor: setInterceptorResponse,
    removeInterceptor: removeInterceptorResponse,
  };
};
