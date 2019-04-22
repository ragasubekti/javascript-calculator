"use strict";
var calc = {
    firstDigit: "",
    secondDigit: "",
    operator: "",
    total: 0
};
// This thing will add number to `calc.firstDigit` Object
var onNumberPressed = function (num) {
    calc.firstDigit += num;
    // Get `#result` element
    var element = document.querySelector("#result");
    // Check if the element isn't null, because TypeScript
    if (element != null) {
        element.innerHTML = calc.firstDigit;
    }
};
var onOperandPressed = function (operator) {
    // const element = document.querySelector("#result");
    // Switch First Digit to Second Digit
    calc.secondDigit = calc.firstDigit;
    // Reset First Digit to Empty String
    calc.firstDigit = "";
    // Set Operator
    calc.operator = operator;
};
var onEqualPressed = function () {
    var element = document.querySelector("#result");
    var firstDigit = parseInt(calc.firstDigit);
    var secondDigit = parseInt(calc.secondDigit);
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
var allClear = function () {
    var element = document.querySelector("#result");
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
