// javascript\helpers\functions.js

import calendar from "../data/calendar";

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

function rewriteDateWithoutSlash(dateSeparated) {
  if (dateSeparated.dayNumber < 10 && dateSeparated.monthNumber < 10) {
    return `0${dateSeparated.dayNumber}0${dateSeparated.monthNumber}${dateSeparated.yearNumber}`;
  }

  if (dateSeparated.dayNumber < 10) {
    return `0${dateSeparated.dayNumber}${dateSeparated.monthNumber}${dateSeparated.yearNumber}`;
  }

  if (dateSeparated.monthNumber < 10) {
    return `${dateSeparated.dayNumber}0${dateSeparated.monthNumber}${dateSeparated.yearNumber}`;
  }

  return `${dateSeparated.dayNumber}${dateSeparated.monthNumber}${dateSeparated.yearNumber}`;
}

function isPalindrome(date) {
  if (isValidDate(date) === false) {
    return false;
  }

  const dateSeparated = separateDate(date);
  const dateWithoutSlash = rewriteDateWithoutSlash(dateSeparated);

  for (
    let index1 = 0, index2 = dateWithoutSlash.length - 1;
    index1 <= index2;
    index1++, index2--
  ) {
    if (dateWithoutSlash[index1] !== dateWithoutSlash[index2]) {
      return false;
    }
  }

  return true;
}

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

function getNextPalindromes(numberOfNextPalindromes, dateFromWhichToStart) {
  let counter = 0;
  let nextPalindromes = [];
  let potentialPalindrome = skipToNextDay(dateFromWhichToStart);

  while (counter < numberOfNextPalindromes) {
    if (isPalindrome(potentialPalindrome) === true) {
      nextPalindromes[nextPalindromes.length] = potentialPalindrome;
      counter++;
    }

    potentialPalindrome = skipToNextDay(potentialPalindrome);
  }

  if (nextPalindromes.length !== numberOfNextPalindromes) {
    return;
  }

  if (nextPalindromes.length === 0) {
    return;
  }

  return nextPalindromes;
}

function checkFormatOfDateInputValue(dateInputValue) {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateInputValue)) {
    return false;
  }

  return true;
}

export {
  separateDate,
  isValidDate,
  rewriteDateWithoutSlash,
  isPalindrome,
  skipToNextDay,
  rewriteDateInProperFormat,
  getNextPalindromes,
  checkFormatOfDateInputValue,
};
