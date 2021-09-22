import { subMonths, format, setDate as dateFnsSetDate, getDaysInMonth } from 'date-fns';

export const setDate = (monthDelta: number) => {
  const currentDate = subMonths(new Date(), monthDelta);
  const dateWithRandomDays = dateFnsSetDate(currentDate, Math.floor(Math.random() * getDaysInMonth(currentDate) + 1));

  return format(dateWithRandomDays, 'yyyy-MM-dd');
};
