import moment from 'moment';

const generateFirstWeek = (year, month) => {
  const firstWeek = [];
  const firstDay = moment()
    .year(year)
    .month(month)
    .startOf('month')
    .format('d');
  const firstDayIndex = parseInt(firstDay);
 
  for (let i = 0; i < 7; i += 1) {
    const firstDayOfMonth = moment()
      .year(year)
      .month(month)
      .startOf('month');

    if (i < firstDayIndex) {
      firstWeek.push(firstDayOfMonth.subtract((firstDayIndex - i), 'days'));
    } else if (i === firstDayIndex) {
      firstWeek.push(firstDayOfMonth);
    } else {
      firstWeek.push(firstDayOfMonth.add((i - firstDayIndex), 'days'));
    }
  }

  return firstWeek;
};

const generateDates = (year, month) => {
  const dates = [];
  const firstWeek = generateFirstWeek(year, month);
  dates.push(firstWeek);

  for (let i = 0; i < 5; i += 1) {
    const week = dates[dates.length - 1];
    const nextWeek = week.map((date) => {
      return moment(date).add(7, 'days');
    });
    dates.push(nextWeek);
  }

  return dates;
};

export default generateDates;
