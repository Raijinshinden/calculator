
function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

function subtract(num1, num2) {
    let sum = num1 - num2;
    console.log(sum);
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    console.log(sum);
}

function divide(num1, num2) {
    let sum = num1 / num2;
    console.log(sum);
}

function calculate(num1, num2, operator) {
    if (operator === add) {
        add(num1, num2);
    } else if (operator === subtract) {
        subtract(num1, num2);
    } else if (operator === multiply) {
        multiply(num1, num2);
    } else if (operator === divide) {
        divide(num1, num2);
    } else {
        return "Unknown Operator. Please try again."
    }
}

calculate(5, 6, multiply);
