// javascript\events\handlers.js
import isValidDate from "./../functions/isValidDate.js";
import isPalindrome from "./../functions/isPalindrome.js";
import getNextPalindromes from "./../functions/getNextPalindromes.js";
import globalVariables from "./../state/management.js";

const handleClickOnSubmitButton = (event) => {
  event.preventDefault();

  if (
    !/^\d{2}\/\d{2}\/\d{4}$/.test(
      document.querySelector("input#date-input").value,
    )
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
  submitButton.textContent = "Check";

  const resultDiv = document.createElement("div");
  resultDiv.id = "result";

  const nextPalindromesDiv = document.createElement("div");
  nextPalindromesDiv.id = "next-palindromes";

  form.appendChild(dateInput);
  form.appendChild(submitButton);

  document.querySelector("#game-wrapper").appendChild(form);
  document.querySelector("#game-wrapper").appendChild(resultDiv);
  document.querySelector("#game-wrapper").appendChild(nextPalindromesDiv);

  form.addEventListener("submit", function (event) {
    handleClickOnSubmitButton(event);
  });
};

export { handleClickOnSubmitButton, handleFormDisplay };
