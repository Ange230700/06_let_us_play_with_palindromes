// javascript\functions\separateDate.js

function separateDate(date) {
  if (typeof date !== "string") {
    return;
  }

  if (date.length !== 10) {
    return;
  }

  if (date[2] !== "/" || date[5] !== "/") {
    return;
  }

  let dayNumber = 0;
  let monthNumber = 0;
  let yearNumber = 0;
  let datePart = "";

  for (let position = 0; position < date.length; position++) {
    if (position === 2 && date[position] === "/") {
      dayNumber = parseInt(datePart, 10);
      datePart = "";
    }

    if (position === 5 && date[position] === "/") {
      monthNumber = parseInt(datePart, 10);
      datePart = "";
    }

    if (date[position] === "/") {
      continue;
    }

    datePart += date[position];

    if (position === date.length - 1) {
      yearNumber = parseInt(datePart, 10);
      datePart = "";
    }
  }

  return {
    dayNumber: dayNumber,
    monthNumber: monthNumber,
    yearNumber: yearNumber,
  };
}

export default separateDate;
