// main.js

import isPalindrome from "./javascript/functions/isPalindrome.js";
import isValidDate from "./javascript/functions/isValidDate.js";
// import rewriteDateInProperFormat from "./javascript/functions/rewriteDateInProperFormat.js";
// import skipToNextDay from "./javascript/functions/skipToNextDay.js";
import getNextPalindromes from "./javascript/functions/getNextPalindromes.js";

// Implement the game UI

// Get the game wrapper element
const gameWrapper = document.getElementById("game-wrapper");

// Create the form
const form = document.createElement("form");
form.id = "date-form";

// Create the date input
const dateInput = document.createElement("input");
dateInput.type = "text";
dateInput.name = "date";
dateInput.id = "date-input";
dateInput.placeholder = "DD/MM/YYYY";

// Create the submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.id = "submit-button";
submitButton.textContent = "Check";

// Create the result display area
const resultDiv = document.createElement("div");
resultDiv.id = "result";

// Create the next palindromes display area
const nextPalindromesDiv = document.createElement("div");
nextPalindromesDiv.id = "next-palindromes";

// Append elements to the form
form.appendChild(dateInput);
form.appendChild(submitButton);

// Append elements to the game wrapper
gameWrapper.appendChild(form);
gameWrapper.appendChild(resultDiv);
gameWrapper.appendChild(nextPalindromesDiv);

// Add event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = dateInput.value.trim();

  // Validate the date format using a regular expression
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(date)) {
    resultDiv.textContent = "Invalid date format. Please use DD/MM/YYYY.";
    nextPalindromesDiv.textContent = "";
    return;
  }

  // Validate the date logically
  if (!isValidDate(date)) {
    resultDiv.textContent =
      "Invalid date. Please enter a real date in DD/MM/YYYY format.";
    nextPalindromesDiv.textContent = "";
    return;
  }

  // Check if the date is a palindrome
  if (isPalindrome(date)) {
    resultDiv.textContent = `${date} is a palindrome date! 🎉`;
  } else {
    resultDiv.textContent = `${date} is not a palindrome date.`;
  }

  // Get next palindromic dates
  const numberOfPalindromes = 5; // Number of palindromic dates to display
  const nextPalindromes = getNextPalindromes(numberOfPalindromes, date);

  // Display the next palindromic dates
  if (nextPalindromes) {
    nextPalindromesDiv.innerHTML = "<h2>Next palindromic dates:</h2><ul></ul>";
    const ul = nextPalindromesDiv.querySelector("ul");
    nextPalindromes.forEach(function (palindromeDate) {
      const li = document.createElement("li");
      li.textContent = palindromeDate;
      ul.appendChild(li);
    });
  } else {
    nextPalindromesDiv.textContent = "Could not find next palindromic dates.";
  }
});
