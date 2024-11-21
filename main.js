// main.js

import isPalindrome from "./javascript/functions/isPalindrome";
import isValidDate from "./javascript/functions/isValidDate";
import rewriteDateInProperFormat from "./javascript/functions/rewriteDateInProperFormat";
import rewriteDateWithoutSlash from "./javascript/functions/rewriteDateWithoutSlash";
import separateDate from "./javascript/functions/separateDate";
import skipToNextDay from "./javascript/functions/skipToNextDay";
import getNextPalindromes from "./javascript/functions/getNextPalindromes";

console.log(separateDate("23/07/2000"));
console.log(isValidDate("23/07/2000"));
console.log(rewriteDateInProperFormat(separateDate("23/07/2000")));
console.log(rewriteDateWithoutSlash(separateDate("23/07/2000")));
console.log(isPalindrome("23/07/2000"));
console.log(skipToNextDay("23/07/2000"));
console.log(getNextPalindromes(10, "23/07/2000"));
