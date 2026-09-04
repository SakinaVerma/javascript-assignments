let num1 = 20;
let num2 = 5;
let operator = "+";

switch (operator) {

    case "+":
        console.log("Addition: " + (num1 + num2));
        break;

    case "-":
        console.log("Subtraction: " + (num1 - num2));
        break;

    case "*":
        console.log("Multiplication: " + (num1 * num2));
        break;

    case "/":
        console.log("Division: " + (num1 / num2));
        break;

    case "%":
        console.log("Modulus: " + (num1 % num2));
        break;

    default:
        console.log("Invalid Operator");
}