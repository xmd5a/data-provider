import { GetReminderResponse } from '../contracts';

export const reminderVisible: GetReminderResponse = {
  show_notification: true,
};

export const reminderHidden: GetReminderResponse = {
  show_notification: false,
};
