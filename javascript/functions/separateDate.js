// javascript\functions\separateDate.js

function separateDate(date) {
  let dayNumber = "";
  let monthNumber = "";
  let yearNumber = "";
  let datePart = "";

  for (let position = 0; position < date.length; position++) {
    if (date[position] === "/" && position === 2) {
      dayNumber = datePart;
      datePart = "";
    }

    if (date[position] === "/" && position === 5) {
      monthNumber = datePart;
      datePart = "";
    }

    if (date[position] === "/") {
      continue;
    }

    datePart += date[position];

    if (position === date.length - 1) {
      yearNumber = datePart;
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
