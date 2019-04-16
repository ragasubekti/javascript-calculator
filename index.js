let number = "";
let secondNumber = "";
let operator = "";

const onNumberPressed = num => {
  number += num;
  document.querySelector("#result").innerHTML = number;
};

const onOperandPressed = type => {
  const element = document.querySelector("#operator");
  secondNumber = number;
  number = "";

  operator = type;

  switch (type) {
    case "multiply":
      element.innerHTML = "*";
      break;
    case "divide":
      element.innerHTML = "÷";
      break;
    case "add":
      element.innerHTML = "+";
      break;
    default:
      return (element.innerHTML = "");
  }
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
      // element.innerHTML = "+";
      break;
    default:
    // return (element.innerHTML = "");
  }

  result.innerHTML = total;
};

const allClear = () => {
  document.querySelector("#result").innerHTML = "0";
  operator = "";
  number = "";
  secondNumber = "";
};
