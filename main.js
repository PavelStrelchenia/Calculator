"use strict";

const display = document.querySelector("#display");
const digit = document.querySelectorAll(".digit");
const operatorBtn = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

let shouldResetScreen = false;

digit.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "0" || shouldResetScreen) {
            display.textContent = button.textContent;
            shouldResetScreen = false;
        } else {
            display.textContent += button.textContent;
        }
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator !== undefined && !shouldResetScreen) {
            secondNumber = Number(display.textContent);
            const result = operate(operator, firstNumber, secondNumber);

            display.textContent = result;
            firstNumber = result;
        } else {
            firstNumber = Number(display.textContent);
        }

        operator = button.textContent;
        shouldResetScreen = true;
    });
});

clear.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = null;
    secondNumber = null;
    operator = undefined;
});

result.addEventListener("click", () => {
    if (operator !== undefined && firstNumber !== null) {
        secondNumber = Number(display.textContent);
        let calculation = operate(operator, firstNumber, secondNumber);

        if (typeof calculation === "number" && !Number.isInteger(calculation)) {
            calculation = Math.round(calculation * 1000) / 1000;
        }
        display.textContent = calculation;
        firstNumber = calculation;
        operator = undefined;
        shouldResetScreen = true;
    }
});

// Addition

function sum(a, b) {
    return a + b;
}

// Subtraction

function sub(a, b) {
    return a - b;
}

// Multiplication

function multi(a, b) {
    return a * b;
}

// Division

function division(a, b) {
    return a / b;
}

// Variables for storing operation components

let firstNumber = null;
let secondNumber = null;
let operator = undefined;

const plus = "+";
const minus = "-";
const mult = "*";
const divis = "/";

function operate(operator, a, b) {
    switch (operator) {
        case plus:
            return sum(a, b);
        case minus:
            return sub(a, b);
        case mult:
            return multi(a, b);
        case divis:
            return b === 0 ? "ERROR" : division(a, b);
        default:
            return "ERROR";
    }
}
