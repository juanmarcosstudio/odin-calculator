let currentInput = '';
let firstNumber = null;
let operator = null;

function appendToDisplay(value) {
  if (currentInput === 'Error') currentInput = '';
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  firstNumber = null;
  operator = null;
  document.getElementById("display").value = '';
}

function setOperator(op) {
  if (currentInput !== '') {
    if (firstNumber === null) {
      firstNumber = parseFloat(currentInput);
    } else if (operator) {
      firstNumber = operate(operator, firstNumber, parseFloat(currentInput));
      document.getElementById("display").value = firstNumber;
    }
  }

  operator = op;
  currentInput = '';
}

function calculate() {
  if (firstNumber !== null && operator && currentInput !== '') {
    const result = operate(operator, firstNumber, parseFloat(currentInput));
    document.getElementById("display").value = result;
    firstNumber = result;
    operator = null; 
    currentInput = '';
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error';
      return 'Error';
  }
}
