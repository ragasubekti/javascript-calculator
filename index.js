let number = "";
let secondNumber = "";
let operator = "";

const onNumberPressed = num => {
  number += num;
  document.querySelector("#result").innerHTML = number;
};

const onOperandPressed = type => {
  secondNumber = number;
  number = "";
  operator = type;
};

const onEqualPressed = () => {
  const result = document.querySelector("#result");
  document.querySelector("#operator").innerHTML = "";

  let total = 0;

  const firstNumber = parseInt(number);
  const secNumber = parseInt(secondNumber);

  switch (operator) {
    case "multiply":
      total = firstNumber * secNumber;
      break;
    case "divide":
      total = firstNumber / secNumber;
      break;
    case "add":
      total = firstNumber + secNumber;
      break;
    case "subtract":
      total = firstNumber - secNumber;
      break;
    default:
  }

  result.innerHTML = total;
};

const allClear = () => {
  document.querySelector("#result").innerHTML = "0";
  operator = "";
  number = "";
  secondNumber = "";
};
