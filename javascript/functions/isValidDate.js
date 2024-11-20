// javascript\functions\isValidDate.js

import calendar from "../data/calendar.js";
import separateDate from "./separateDate.js";

function isValidDate(date) {
  const dateSeparated = separateDate(date);

  if (
    parseInt(dateSeparated.monthNumber) < 1 ||
    12 < parseInt(dateSeparated.monthNumber)
  ) {
    return false;
  }

  if (
    parseInt(dateSeparated.yearNumber) < 999 ||
    9999 < parseInt(dateSeparated.yearNumber)
  ) {
    return false;
  }

  if (
    calendar[dateSeparated.monthNumber - 1] < parseInt(dateSeparated.dayNumber)
  ) {
    return false;
  }

  return true;
}

export default isValidDate;
