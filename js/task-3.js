const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateNameOutput);

function updateNameOutput() {
  const inputValue = nameInput.value.trim();

  const nameToShow = inputValue === "" ? "Anonymous" : inputValue;

  nameOutput.textContent = nameToShow;
}
