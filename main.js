// main.js

import isPalindrome from "./javascript/functions/isPalindrome.js";
import isValidDate from "./javascript/functions/isValidDate.js";
import rewriteDateInProperFormat from "./javascript/functions/rewriteDateInProperFormat.js";
import rewriteDateWithoutSlash from "./javascript/functions/rewriteDateWithoutSlash.js";
import separateDate from "./javascript/functions/separateDate.js";
import skipToNextDay from "./javascript/functions/skipToNextDay.js";
import getNextPalindromes from "./javascript/functions/getNextPalindromes.js";

console.log(separateDate("23/07/2000"));
console.log(isValidDate("23/07/2000"));
console.log(rewriteDateInProperFormat(separateDate("23/07/2000")));
console.log(rewriteDateWithoutSlash(separateDate("23/07/2000")));
console.log(isPalindrome("23/07/2000"));
console.log(skipToNextDay("23/07/2000"));
console.log(getNextPalindromes(10, "23/07/2000"));
