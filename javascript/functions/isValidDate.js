// javascript\functions\isValidDate.js

import separateDate from "./separateDate.js";

function isValidDate(date) {
  const dateSeparated = separateDate(date);
  console.log(dateSeparated);

  if (dateSeparated.monthNumber < 1 || 12 < dateSeparated.monthNumber) {
    return false;
  }

  if (dateSeparated.yearNumber < 999 || 9999 < dateSeparated.yearNumber) {
    return false;
  }

  return true;
}

export default isValidDate;
