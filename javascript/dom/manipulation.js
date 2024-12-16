// javascript\dom\manipulation.js

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

  return form;
}

export { buildFormInterface };
