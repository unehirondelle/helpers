import moment from 'moment';

const weekdays = [
    {day: 'Monday', number: 1},
    {day: 'Tuesday', number: 2},
    {day: 'Wednesday', number: 3},
    {day: 'Thursday', number: 4},
    {day: 'Friday', number: 5},
    {day: 'Saturday', number: 6},
    {day: 'Sunday', number: 0}
];
const todaysWeekday = weekdays.find(({number}) => number === moment().isoWeekday());

export default todaysWeekday;
