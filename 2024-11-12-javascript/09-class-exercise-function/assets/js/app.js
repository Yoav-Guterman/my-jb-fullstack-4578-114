// const firstName = prompt('enter first name');
// const lastName = prompt('enter last name');

// function printStyledName(name) {
//     document.write(`${name[0].toUpperCase()}${name.substring(1)}`);
// }


// printStyledName(firstName);
// document.write(" ")
// printStyledName(lastName);


// exercise 1 - 1
// const num1 = 1;
// const num2 = 2;
// maxNumber(num1, num2)

// function maxNumber(num1, num2) {
//     console.log(num1 > num2 ? `num1: ${num1}` : `num2: ${num2}`)
// }

// exercise 1 - 2
// num1 = +prompt("please enter a number");
// num2 = +prompt("please enter a number");
// maxNumber(num1, num2)

// function maxNumber(num1, num2) {
//     console.log(num1 > num2 ? `num1: ${num1}` : `num2: ${num2}`)
// }

// exercise 1 - 3
// num1 = parseInt(Math.random() * 100);
// num2 = parseInt(Math.random() * 100);
// maxNumber(num1, num2)

// function maxNumber(num1, num2) {
//     console.log(num1 > num2 ? `num1: ${num1}` : `num2: ${num2}`)
// }

// exercise 2
// const n = +prompt("enter a number")
// const m = +prompt("enter a number")

// cohavit(n)

// function cohavit(n) {
//     for (i = 0; i < n; i++) {
//         document.write("*");
//     }
// }
// document.write("<br>");

// square(m)

// function square(m) {
//     for (let i = 0; i < m; i++) {
//         cohavit(m)
//         document.write("<br>");
//     }
// }

//exercise 3
// const numbers = [1, 2, 3, 4, 7, 4, 5];
// const numbers2 = [1, 2, 3, 4, 9, 5, 8];

// biggestNumber(numbers);
// biggestNumber(numbers2);


// function biggestNumber(array) {
//     let max = 0;
//     for (const item of array) {
//         max = item > max ? item : max;
//     }
//     document.write(`biggest number is: ${max}<br>`);
// }

//exercise 4
const num = +prompt("please enter a number");

function isPositive(num) {
    return num > 0
}
console.log(`${num} is positive: ${isPositive(num)}`)