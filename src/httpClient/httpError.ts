import { AxiosError } from 'axios';

type ErrorMessages = Array<{
  errorMessage: string;
  errorCode: string;
}>;

export class HttpError extends Error {
  errorMessages: ErrorMessages;

  constructor(
    error: AxiosError<{
      messages: ErrorMessages;
    }>
  ) {
    let errorMessages;
    if (error.response?.headers['content-type']?.includes('application/json')) {
      errorMessages = error.response?.data.messages ?? [];
    } else {
      errorMessages = [
        {
          errorMessage: `Unknown error with status code ${error.response?.status}`,
          errorCode: String(error.response?.status),
        },
      ];
    }
    super(error.message);
    this.errorMessages = errorMessages;
  }
}
