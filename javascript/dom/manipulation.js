// javascript\dom\manipulation.js

import { getNextPalindromes, isPalindrome } from "../helpers/functions";

function buildFormInterface() {
  const form = document.createElement("form");
  form.id = "date-form";

  const dateInput = document.createElement("input");
  dateInput.type = "text";
  dateInput.name = "date";
  dateInput.id = "date-input";
  dateInput.placeholder = "DD/MM/YYYY";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "submit-button";
  submitButton.innerHTML = "Check";

  const resultDiv = document.createElement("div");
  resultDiv.id = "result";

  const nextPalindromesDiv = document.createElement("div");
  nextPalindromesDiv.id = "next-palindromes";

  form.appendChild(dateInput);
  form.appendChild(submitButton);

  document.querySelector("#game-wrapper").appendChild(form);
  document.querySelector("#game-wrapper").appendChild(resultDiv);
  document.querySelector("#game-wrapper").appendChild(nextPalindromesDiv);

  return form;
}

function reportDateFormatIssue() {
  document.querySelector("div#result").innerHTML =
    "Invalid date format. Please use DD/MM/YYYY.";
  document.querySelector("div#next-palindromes").innerHTML = "";
}

function reportDateValidityIssue() {
  document.querySelector("div#result").innerHTML =
    "Invalid date. Please enter a real date in DD/MM/YYYY format.";
  document.querySelector("div#next-palindromes").innerHTML = "";
}

function printResult() {
  if (isPalindrome(document.querySelector("input#date-input").value)) {
    document.querySelector("div#result").innerHTML =
      `${document.querySelector("input#date-input").value} is a palindrome date! 🎉`;
  } else {
    document.querySelector("div#result").innerHTML =
      `${document.querySelector("input#date-input").value} is not a palindrome date.`;
  }
}

function printNextPalindromicDates(numberOfPalindromes) {
  document.querySelector("div#next-palindromes").innerHTML =
    "<h2>Next palindromic dates:</h2><ul></ul>";
  getNextPalindromes(
    numberOfPalindromes,
    document.querySelector("input#date-input").value,
  ).forEach(function (palindromeDate) {
    const li = document.createElement("li");
    li.innerHTML = palindromeDate;
    document
      .querySelector("div#next-palindromes")
      .querySelector("ul")
      .appendChild(li);
  });
}

function reportNoPalindromicDatesFound() {
  document.querySelector("div#next-palindromes").innerHTML =
    "Could not find next palindromic dates.";
}

export {
  buildFormInterface,
  reportDateFormatIssue,
  reportDateValidityIssue,
  printResult,
  printNextPalindromicDates,
  reportNoPalindromicDatesFound,
};
