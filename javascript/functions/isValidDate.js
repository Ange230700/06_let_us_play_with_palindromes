// javascript\functions\isValidDate.js

import calendar from "../data/calendar.js";
import separateDate from "./separateDate.js";

function isValidDate(date) {
  const dateSeparated = separateDate(date);

  if (dateSeparated === undefined) {
    return false;
  }

  if (
    dateSeparated.dayNumber < 1 ||
    calendar[dateSeparated.monthNumber - 1] < dateSeparated.dayNumber
  ) {
    return false;
  }

  if (dateSeparated.monthNumber < 1 || 12 < dateSeparated.monthNumber) {
    return false;
  }

  if (dateSeparated.yearNumber < 1000 || 9999 < dateSeparated.yearNumber) {
    return false;
  }

  return true;
}

export default isValidDate;
