"use strict";

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
