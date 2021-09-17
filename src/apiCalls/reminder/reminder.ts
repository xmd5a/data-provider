import { GetReminderResponse, PostReminderResponse } from '../../contracts';
import { HttpClient } from '../../httpClient';
import { ApiGetService, useApiFactory } from '../../queryHooks';

const REMINDER_ENDPOINT = '/reminder';
const REMINDER_QUERY_KEY = 'reminder';

const getReminder = (client: HttpClient) => ({
  queryKey: REMINDER_QUERY_KEY,
  get: () => client.get<GetReminderResponse>(REMINDER_ENDPOINT).then(({ data }) => data),
});
const useGetReminder = (client: HttpClient) => useApiFactory<ApiGetService<GetReminderResponse>>(client, getReminder);

const postReminder = (client: HttpClient) => ({
  queryKey: REMINDER_QUERY_KEY,
  post: () => client.post<PostReminderResponse>(REMINDER_ENDPOINT).then(({ data }) => data),
});
const usePostReminder = (client: HttpClient) => useApiFactory(client, postReminder);

export { REMINDER_ENDPOINT, useGetReminder, usePostReminder };
