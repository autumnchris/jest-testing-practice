function add(num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.';
  }
  else {
    return num1 + num2;
  }
}

function subtract(num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.';
  }
  else {
    return num1 - num2;
  }
}

function multiply(num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.';
  }
  else {
    return num1 * num2;
  }
}

function divide(num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.';
  }
  else if (num2 === 0) {
    return 'ERROR: The \"num2\" parameter cannot have a value of 0.';
  }
  else {
    return num1 / num2;
  }
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

module.exports = calculator;