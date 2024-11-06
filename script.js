let currentInput = ''; // Current input for display
let firstNumber = null; // First number in calculation
let operator = null; // Operator selected
let secondNumber = null; // Second number in calculation

// Append numbers and operators to the display
function appendToDisplay(value) {
  if (currentInput === 'Error') currentInput = ''; // Reset error message
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  firstNumber = null;
  operator = null;
  secondNumber = null;
  document.getElementById("display").value = '';
}

// Calculate the result
function calculate() {
  if (firstNumber === null || operator === null || currentInput === '') return; // Incomplete expression
  secondNumber = parseFloat(currentInput);
  const result = operate(operator, firstNumber, secondNumber);

  // Display result or error
  if (result === "Error") {
    document.getElementById("display").value = result;
    currentInput = 'Error'; // Prevent further input
  } else {
    document.getElementById("display").value = result;
    firstNumber = result; // Use the result for further calculations
    operator = null; // Clear operator after calculation
    currentInput = ''; // Clear current input for next number
  }
}

// Handle operator press
function setOperator(op) {
  if (firstNumber === null) {
    firstNumber = parseFloat(currentInput);
    currentInput = '';
  }
  operator = op;
  document.getElementById("display").value = '';
}
