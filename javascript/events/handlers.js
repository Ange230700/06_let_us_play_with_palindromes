// javascript\events\handlers.js

import {
  buildFormInterface,
  printNextPalindromicDates,
  printResult,
  reportDateFormatIssue,
  reportDateValidityIssue,
  reportNoPalindromicDatesFound,
} from "../dom/manipulation.js";
import {
  isValidDate,
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
    reportDateFormatIssue();
    return;
  }

  if (!isValidDate(document.querySelector("input#date-input").value)) {
    reportDateValidityIssue();
    return;
  }

  printResult();

  if (
    getNextPalindromes(
      globalVariables.numberOfPalindromes,
      document.querySelector("input#date-input").value,
    )
  ) {
    printNextPalindromicDates(globalVariables.numberOfPalindromes);
  } else {
    reportNoPalindromicDatesFound();
  }
};

const handleFormDisplay = () => {
  buildFormInterface().addEventListener("submit", function (event) {
    handleClickOnSubmitButton(event);
  });
};

export { handleClickOnSubmitButton, handleFormDisplay };
