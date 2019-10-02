const moment = require('moment');

const DATE_FORMAT = 'DD/MM/YYYY';
const DATE_FULL_FORMAT = 'MM/DD/YYYY HH:MM:SS';

const unitTimes = {
  days: 'days',
  months: 'months',
  years: 'years'
};

const employees = [
  {
    name: 'Felipe',
    money: 300,
    timezone: 'Europe/Spain',
    date: '12/02/2016 -- 14:22:05'
  },
  {
    name: 'Rebecca',
    money: 600,
    timezone: 'America/New_York',
    date: '05/12/2017 -- 01:15:25'
  },
  {
    name: 'Jennifer',
    money: 500,
    timezone: 'Europe/Dublin',
    date: '25/11/2018 -- 23:55:01'
  },
  { name: 'Nobita', money: 100, timezone: 'Asia/Tokyo', date: '14/07/2016' },
  { name: 'Uganda', money: 50, timezone: 'Africa/Nairobi', date: '20/09/2015' }
];

const diffDates = function(date1 = '', date2 = '') {
  date1 = moment(date1.split());
  date2 = moment(date2.split());
  console.log(date1.diff(date2, 'days'));
};

const sumDates = function(date = '', unitTimes = []) {
  const sumDate = moment(date, DATE_FORMAT)
    .add(+unitTimes.slice(0, 1), unitTimes.slice(1, 2))
    .format('DD/MM/YYYY');
  console.log(sumDate);
};

const setDateEmployee = function(name = '') {
  const employee = employees.find(employee => employee.name === name);
  employee.date = moment().format(DATE_FORMAT);
  employee.updated_at = employee.date;
  console.log(
    `La fecha de ${employee.name} ha sido actualizada: `,
    employee.date
  );
};

const sumDiffDate = function() {
  //TODO
};
