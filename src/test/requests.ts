import * as handlers from './handlers';

const { paymentsHandlers, projectsHandlers, reminderHandlers, reportingsHandlers, sessionHandlers, surveyHandlers } =
  handlers;

export const requests = [
  ...paymentsHandlers,
  ...projectsHandlers,
  ...reminderHandlers,
  ...reportingsHandlers,
  ...sessionHandlers,
  ...surveyHandlers,
];
