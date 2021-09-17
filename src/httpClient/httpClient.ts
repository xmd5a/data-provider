import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// import { Config } from 'App/config';

import { HttpError } from './httpError';

// const { REACT_APP_ECOLYTIQ_API_URL: apiHost, REACT_APP_MOCK_API: mockEnable } = Config.getAll();

type HttpProvider = typeof axios;
type InterceptorCallbackFunction = (request: RequestConfig) => RequestConfig;

export type RequestConfig = AxiosRequestConfig;
export type HttpClientResponseData<ResponseType> = AxiosResponse<ResponseType>;
export type HttpClientAsyncResponse<ResponseType> = Promise<HttpClientResponseData<ResponseType>>;
export type GetFunction = <ReturnType>(url: string, config?: RequestConfig) => HttpClientAsyncResponse<ReturnType>;
export type PostFunction = <DataType, ReturnType = DataType>(
  url: string,
  data?: DataType,
  config?: RequestConfig
) => HttpClientAsyncResponse<ReturnType>;
export type SetInterceptorFunction = (callback: InterceptorCallbackFunction) => number;
export type RemoveInterceptorFunction = (interceptorId: number) => void;

export type HttpClient = {
  setInterceptor: SetInterceptorFunction;
  removeInterceptor: RemoveInterceptorFunction;
  get: GetFunction;
  post: PostFunction;
};

const httpClientFactory = (http: HttpProvider): HttpClient => ({
  setInterceptor: (callback) => http.interceptors.request.use(callback),
  removeInterceptor: (id: number) => http.interceptors.request.eject(id),
  get: (url, config) =>
    http.get(url, config).catch((error) => {
      throw new HttpError(error);
    }),
  post: (url, data, config?) =>
    http.post(url, data, config).catch((error) => {
      throw new HttpError(error);
    }),
});

// axios.defaults.baseURL = mockEnable === 'true' ? '' : apiHost;

const httpClient = httpClientFactory(axios);
export { httpClient, httpClientFactory };
