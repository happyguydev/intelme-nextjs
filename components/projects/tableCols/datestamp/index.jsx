import React from 'react';
import { isAfter, isToday, parseISO, isBefore, addDays } from 'date-fns';
import formatRelative from 'date-fns/formatRelative';
import dateStyles from './styles';
import { enAU } from 'date-fns/locale';

export const DateStamp = ({ dueDate }) => {
  const formatRelativeLocale = {
    lastWeek: "'last' eeee",
    yesterday: "'yesterday'",
    today: "'today'",
    tomorrow: "'tomorrow'",
    nextWeek: "'next' eeee",
    other: ' dd LLL yy',
  };

  const locale = {
    ...enAU,
    formatRelative: (token) => formatRelativeLocale[token],
  };

  const styles = dateStyles();
  const today = new Date();
  const parsed = parseISO(dueDate);
  const formattedDate = formatRelative(parsed, today, { locale });

  return (
    <>
      <span className={styles.date}>{formattedDate}</span>
    </>
  );
};

export default DateStamp;
