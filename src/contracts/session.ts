import { Parameters } from './common';

export type PostSessionPayload = {};

export type PostSessionResponse = {
  session_token: string;
  provider: string;
  parameters: Parameters;
};

export type DeleteSessionResponse = null;
