// javascript\functions\rewriteDateInProperFormat.js

function rewriteDateInProperFormat(dateSeparated) {
  if (dateSeparated.dayNumber < 10 && dateSeparated.monthNumber < 10) {
    return `0${dateSeparated.dayNumber}/0${dateSeparated.monthNumber}/${dateSeparated.yearNumber}`;
  }

  if (dateSeparated.dayNumber < 10) {
    return `0${dateSeparated.dayNumber}/${dateSeparated.monthNumber}/${dateSeparated.yearNumber}`;
  }

  if (dateSeparated.monthNumber < 10) {
    return `${dateSeparated.dayNumber}/0${dateSeparated.monthNumber}/${dateSeparated.yearNumber}`;
  }

  return `${dateSeparated.dayNumber}/${dateSeparated.monthNumber}/${dateSeparated.yearNumber}`;
}

export default rewriteDateInProperFormat;
