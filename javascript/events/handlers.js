// javascript\events\handlers.js

import { buildFormInterface } from "../dom/manipulation.js";
import {
  isValidDate,
  isPalindrome,
  getNextPalindromes,
  checkFormatOfDateInputValue,
} from "../helpers/functions.js";
import globalVariables from "./../state/management.js";

const handleClickOnSubmitButton = (event) => {
  event.preventDefault();

  if (
    checkFormatOfDateInputValue(
      document.querySelector("input#date-input").value,
    ) === false
  ) {
    document.querySelector("div#result").textContent =
      "Invalid date format. Please use DD/MM/YYYY.";
    document.querySelector("div#next-palindromes").textContent = "";
    return;
  }

  if (!isValidDate(document.querySelector("input#date-input").value)) {
    document.querySelector("div#result").textContent =
      "Invalid date. Please enter a real date in DD/MM/YYYY format.";
    document.querySelector("div#next-palindromes").textContent = "";
    return;
  }

  if (isPalindrome(document.querySelector("input#date-input").value)) {
    document.querySelector("div#result").textContent =
      `${document.querySelector("input#date-input").value} is a palindrome date! 🎉`;
  } else {
    document.querySelector("div#result").textContent =
      `${document.querySelector("input#date-input").value} is not a palindrome date.`;
  }

  if (
    getNextPalindromes(
      globalVariables.numberOfPalindromes,
      document.querySelector("input#date-input").value,
    )
  ) {
    document.querySelector("div#next-palindromes").innerHTML =
      "<h2>Next palindromic dates:</h2><ul></ul>";
    getNextPalindromes(
      globalVariables.numberOfPalindromes,
      document.querySelector("input#date-input").value,
    ).forEach(function (palindromeDate) {
      const li = document.createElement("li");
      li.textContent = palindromeDate;
      document
        .querySelector("div#next-palindromes")
        .querySelector("ul")
        .appendChild(li);
    });
  } else {
    document.querySelector("div#next-palindromes").textContent =
      "Could not find next palindromic dates.";
  }
};

const handleFormDisplay = () => {
  buildFormInterface().addEventListener("submit", function (event) {
    handleClickOnSubmitButton(event);
  });
};

export { handleClickOnSubmitButton, handleFormDisplay };
