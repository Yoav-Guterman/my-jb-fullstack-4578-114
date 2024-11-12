// exercise 1:
// let i = 1;
// while (i <= 1000) {
//     document.write(`${i} `)
//     i++
// }


// exercise 2:
// let i = 2;
// while (i <= 1000) {
//     document.write(`${i} `)
//     i = i + 2
// }


// exercise 3:
// let i = 1001;
// while (i <= 2000) {
//     document.write(`${i} `)
//     i = i + 2
// }


// exercise 4:
// let i = 1000;
// while (i >= 1) {
//     document.write(`${i} `)
//     i--
// }


// exercise 5:
// let i = 1000;
// while (i >= 1) {
//     document.write(`${i} `)
//     i = i - 2
// }


// exercise 6:
// let i = 999;
// while (i >= 1) {
//     document.write(`${i} `)
//     i = i - 2
// }


// exercise 7:
// const limit = +prompt("please enter a number");
// let i = 1;
// while (i <= limit) {
//     if (i % 3 === 0) {
//         document.write(`${i} `)
//     }
//     i++
// }


// exercise 8:
// let limit = +prompt("please enter a number");
// let i = 1;
// while (i <= limit) {
//     document.write(`${i} `)
//     i++
// }
// while (limit >= 1) {
//     document.write(`${limit} `)
//     limit--
// }


// exercise 9:
// let num1 = +prompt("enter the first number")
// const num2 = +prompt("enter the second number")
// while (num1 <= num2) {
//     document.write(num1)
//     num1++
// }


// exercise 10:
// let num1 = +prompt("enter the first number")
// let num2 = +prompt("enter the second number")
// if (num1 < num2) {
//     while (num1 <= num2) {
//         document.write(`${num1} `)
//         num1++
//     }
// } else {
//     while (num2 <= num1) {
//         document.write(`${num2} `)
//         num2++
//     }
// }


// exercise 11:
// const num1 = +prompt("enter the first number")
// let num2 = +prompt("enter the second number")
// while (num2 >= num1) {
//     document.write(`${num2} `)
//     num2--
// }


// exercise 12:
// let num1 = +prompt("enter the first number")
// let num2 = +prompt("enter the second number")
// if (num2 > num1) {
//     while (num2 >= num1) {
//         document.write(`${num2} `)
//         num2--
//     }
// } else {
//     while (num1 >= num2) {
//         document.write(`${num1} `)
//         num1--
//     }
// }


// exercise 13:
// const num = +prompt("please enter a number");
// let first = +prompt("please enter a first number");
// const last = +prompt("please enter a last number");
// while (first <= last) {
//     if (first % num === 0) {
//         document.write(`${first} `);
//     }
//     first++;
// }

// exercise 14:
// const num = +prompt("please enter a number");
// let first = +prompt("please enter a first number");
// let last = +prompt("please enter a last number");
// if (first > last) {
//     let temp = last
//     last = first
//     first = temp
// }
// while (first <= last) {
//     if (first % num === 0) {
//         document.write(`${first} `);
//     }
//     first++;
// }


// exercise 15:
// let num = 1;
// while (num !== 0) {
//     num = +prompt("please enter a number");
//     if (num % 7 === 0) {
//         document.write(`the number ${num} divides by 7 without leftover <br>`);
//         alert(`the number ${num} divides by 7 without leftover`);
//     } else {
//         document.write(`the number ${num} divides by 7 with leftover <br>`);
//         alert(`the number ${num} divides by 7 with leftover`);
//     }
// }


// exercise 16:
// let num = +prompt("please enter a number");
// while (num !== 0) {
//     if (num % 7 === 0) {
//         document.write(`the number ${num} divides by 7 without leftover <br>`);
//         alert(`the number ${num} divides by 7 without leftover`);
//     } else {
//         document.write(`the number ${num} divides by 7 with leftover <br>`);
//         alert(`the number ${num} divides by 7 with leftover`);
//     }
//     num = +prompt("please enter a number");
// }


// exercise 17:
// let num = 1;
// while (num >= 0) {
//     num = +prompt("please enter a number");
//     document.write(`the number ${num} square 3 is: ${num ** 3} <br>`);
//     alert(`the number ${num} square 3 is: ${num ** 3}`);
// }


// exercise 18:
// let num = +prompt("please enter a number");;
// while (num >= 0) {
//     document.write(`the number ${num} square 3 is: ${num ** 3} <br>`);
//     alert(`the number ${num} square 3 is: ${num ** 3}`);
//     num = +prompt("please enter a number");
// }


// exercise 19:
// let num = 0;
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//     num = +prompt(`please enter the ${i} number`)
//     sum = sum + num;
//     i++
// }
// document.write(`the sum of all ten numbers is: ${sum}<br>and the average is: ${sum / 10}`)


// exercise 20:
// let num = 0;
// let max = 0;
// let i = 1;
// while (i <= 10) {
//     num = +prompt(`please enter the ${i} number`)
//     if (num > max) {
//         max = num
//     }
//     i++
// }
// document.write(`the biggest number is: ${max}`)


// exercise 21:
// let num = 0;
// let min = 9999999;
// let i = 1;
// while (i <= 10) {
//     num = +prompt(`please enter the ${i} number`)
//     if (num < min) {
//         min = num
//     }
//     i++
// }
// document.write(`the smallest number is: ${min}`)



// exercise 22:
// let num = 0;
// let odd = 0;
// let even = 0;
// let i = 1;
// while (i <= 10) {
//     num = +prompt(`please enter the ${i} number`)
//     if (num % 2 === 0) {
//         even++
//     } else {
//         odd++
//     }
//     i++
// }
// document.write(`count of even numbers is: ${even}<br>count of odd numbers is: ${odd}`)


// exercise 23:
// let num = +prompt(`please enter number`);
// let odd = 0;
// let even = 0;
// while (num > 0) {
//     if (num % 2 === 0) {
//         even++
//     } else {
//         odd++
//     }
//     num = +prompt(`please enter number`)
// }
// document.write(`count of even numbers is: ${even}<br>count of odd numbers is: ${odd}`)


// exercise 24:
// let num = +prompt(`please enter number`);
// let lastDigit;
// let sum = 0;
// while (num !== 0) {
//     lastDigit = (num % 10);
//     sum += lastDigit;
//     num = parseInt(num / 10);
// }
// document.write(`the sum of all digits is: ${sum}`);


// exercise 25:
let num = +prompt(`please enter number`);
let count = 0;
let numCopy = num
if (numCopy === 0) {
    count = 1;
}
while (numCopy !== 0) {
    numCopy = parseInt(numCopy / 10);
    count++;
}
document.write(`the number ${num} has: ${count} digits`);
