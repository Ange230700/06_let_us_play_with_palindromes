// javascript\functions\isPalindrome.js
import separateDate from "./separateDate";

function isPalindrome(date) {
  const dateSeparated = separateDate(date);

  let dateWithoutSlash =
    dateSeparated.dayNumber +
    dateSeparated.monthNumber +
    dateSeparated.yearNumber;

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

export default isPalindrome;
