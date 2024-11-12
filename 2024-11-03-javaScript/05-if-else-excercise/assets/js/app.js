let firstNumber = +prompt(`please insert first number`);
let secondNumber = +prompt(`please insert second number`);

// we need to convert each variable value to numeric value
// int = integer -> מספר שלם

// firstNumber = parseInt(firstNumber)
// secondNumber = parseInt(secondNumber)

// if we need to support decimal numbers, we need to float instead of integer
// firstNumber = parseFloat(firstNumber)
// secondNumber = parseFloat(secondNumber) -> decimal number

// or we can use the + sign before a string
// let firstNumber = +prompt(`please insert first number`);
// let secondNumber = +prompt(`please insert second number`);
// like this:
// firstNumber = +firstNumber
// firstNumber = +secondNumber

document.write(ty(firstNumber))
document.write(typeof (secondNumber))

if (firstNumber > secondNumber) {
    document.write(`${firstNumber} is bigger`);
} else {
    document.write(`${secondNumber} is bigger`);
}
