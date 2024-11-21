// javascript\functions\getNextPalindromes.js

import isPalindrome from "./isPalindrome";
import skipToNextDay from "./skipToNextDay";

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

export default getNextPalindromes;
