// javascript\functions\isPalindrome.js
import isValidDate from "./isValidDate.js";
import rewriteDateWithoutSlash from "./rewriteDateWithoutSlash.js";
import separateDate from "./separateDate.js";

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

export default isPalindrome;
