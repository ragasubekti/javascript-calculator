let calc = {
  firstDigit: "",
  secondDigit: "",
  operator: "",
  total: 0
};

// This thing will add number to `calc.firstDigit` Object
const onNumberPressed = (num: number) => {
  calc.firstDigit += num;

  // Get `#result` element
  const element = document.querySelector("#result");

  // Check if the element isn't null, because TypeScript
  if (element != null) {
    element.innerHTML = calc.firstDigit;
  }
};

const onOperandPressed = (operator: string) => {
  // const element = document.querySelector("#result");

  // Switch First Digit to Second Digit
  calc.secondDigit = calc.firstDigit;

  // Reset First Digit to Empty String
  calc.firstDigit = "";
  // Set Operator
  calc.operator = operator;
};

const onEqualPressed = () => {
  const element = document.querySelector("#result");

  const firstDigit = parseInt(calc.firstDigit);
  const secondDigit = parseInt(calc.secondDigit);

  switch (calc.operator) {
    case "multiply":
      calc.total = secondDigit * firstDigit;
      break;
    case "divide":
      calc.total = secondDigit / firstDigit;
      break;
    case "add":
      calc.total = secondDigit + firstDigit;
      break;
    case "subtract":
      calc.total = secondDigit - firstDigit;
      break;
  }

  if (element != null) {
    element.innerHTML = calc.total.toString();
  }
};

const allClear = () => {
  const element = document.querySelector("#result");

  if (element != null) {
    element.innerHTML = "0";
  }

  // Reset
  calc = {
    firstDigit: "",
    secondDigit: "",
    operator: "",
    total: 0
  };
};
