// javascript\functions\skipToNextDay.js

import calendar from "../data/calendar.js";
import rewriteDateInProperFormat from "./rewriteDateInProperFormat.js";
import separateDate from "./separateDate.js";

function skipToNextDay(date) {
  const dateSeparated = separateDate(date);

  dateSeparated.dayNumber++;

  if (dateSeparated.dayNumber > calendar[dateSeparated.monthNumber - 1]) {
    dateSeparated.dayNumber = 1;
    dateSeparated.monthNumber++;
  }

  if (dateSeparated.monthNumber > 12) {
    dateSeparated.monthNumber = 1;
    dateSeparated.yearNumber++;
  }

  return rewriteDateInProperFormat(dateSeparated);
}

export default skipToNextDay;
