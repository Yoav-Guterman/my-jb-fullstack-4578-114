// exercise 1
// function message() {
//     document.write("Make Things Go Right<br>");
// }
// for (let i = 1; i <= 3; i++) {
//     message();
// }


// exercise 2
// function message() {
//     document.write("My Name is Yoav Guterman :) <br>");
// }
// for (let i = 1; i <= 100; i++) {
//     message();
// }


// exercise 3
// function message(name) {
//     for (let i = 1; i <= 10; i++) {
//         document.write(`your name is: ${name}<br>`);
//     }
// }
// const string = prompt("what is your name?")
// message(string);


// exercise 4
// function message(string, num) {
//     for (let i = 1; i <= num; i++) {
//         document.write(`your message is: ${string}<br>`);
//     }
// }
// const string = prompt("what is your message?")
// const num = +prompt("how many times do you want the message to appear")
// message(string, num);


// exercise 5
// function average(num1, num2, num3) {
//     return ((num1 + num2 + num3) / 3);
// }

// function getRandomNumber() {
//     return parseInt(Math.random() * 100);
// }
// const num1 = getRandomNumber();
// const num2 = getRandomNumber();
// const num3 = getRandomNumber();
// document.write(`the average of: ${num1}, ${num2}, ${num3} is: ${average(num1, num2, num3)}`)


// exercise 6
// function getMaxNumber(num1, num2, num3) {
//     let max = 0;
//     if (num1 > num2) {
//         max = num1;
//         max = num3 > num1 ? num3 : num1;
//     } else {
//         max = num3 > num2 ? num3 : num2;
//     }
//     return max;
// }
// function getRandomNumber() {
//     return parseInt(Math.random() * 100)
// }
// const num1 = getRandomNumber();
// const num2 = getRandomNumber();
// const num3 = getRandomNumber();
// document.write(`between the numbers: ${num1}, ${num2}, ${num3}, the max num is: ${getMaxNumber(num1, num2, num3)}`)


// exercise 7
// function smiley(num) {
//     if (isNaN(num)) return
//     if (typeof num !== 'number') return
//     let message;
//     switch (num) {
//         case 1:
//             message = ":-)";
//             break;
//         case 2:
//             message = ":-(";
//             break;
//         case 3:
//             message = ":-/";
//             break;
//         case 4:
//             message = ";-)";
//             break;
//         case 5:
//             message = ";-("
//             break;
//         default:
//             message = "your number is not 1-5";
//             break;
//     }
//     return message
// }

// function printAllSmileis() {
//     for (let i = 1; i <= 5; i++) {
//         document.write(`the number is: ${i} and the message is: ${smiley(i)}<br>`)
//     }
// }

// function print100Smilies() {
//     for (let i = 1; i <= 100; i++) {
//         const random = parseInt((Math.random() * 5) + 1);
//         document.write(`the number is: ${random} and the message is: ${smiley(random)}<br>`)
//     }
// }

// const num = parseInt((Math.random() * 5) + 1)
// document.write(`the number is: ${num} and the message is: ${smiley(num)}<br>`)

// printAllSmileis();
// print100Smilies();


// exercise 8
// function getCurrentTime() {
//     const d = new Date();
//     const hour = d.getHours();
//     const minute = d.getMinutes();
//     const seconds = d.getSeconds();

//     const time = `${hour}:${minute}:${seconds}`

//     return time;
// }
// document.write(`time now is: ${getCurrentTime()}`)


// exercise 9
// function showArray(array) {
//     for (const item of array) {
//         document.write(`${item} | `);
//     }
// }

// const array = [];
// for (let i = 0; i < 7; i++) {
//     const num = parseInt(Math.random() * 100)
//     array.push(num)
// }

// showArray(array)


// exercise 10
// function showArray(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//         document.write(`${item} | `);
//     }
//     document.write(`the sum of the array is: ${sum}`);
// }

// const array = [];
// for (let i = 0; i < 7; i++) {
//     const num = parseInt(Math.random() * 100)
//     array.push(num)
// }
// showArray(array)


// exercise 11
// function randomNumbers(start, end) {
//     return parseInt((Math.random() * (end + 1 - start)) + start)
// }
// const start = +prompt("please enter min number");
// const end = +prompt("please enter max number");

// for (let i = 1; i <= 100; i++) {
//     document.write(`random number ${i} from ${start} to ${end} is: ${randomNumbers(start, end)}<br>`)
// }


// exercise 12
// function square(num) {
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// const num = +prompt("please enter a number")
// square(num);


// exercise 13
// function square(height, width) {
//     for (let i = 1; i <= height; i++) {
//         for (let j = 1; j <= width; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// const height = +prompt("please enter a height");
// const width = +prompt("please enter a width")

// square(height, width);


// exercise 14
// function square() {
//     const height = parseInt((Math.random() * 20) + 5);
//     const width = parseInt((Math.random() * 20) + 5);
//     for (let i = 1; i <= height; i++) {
//         for (let j = 1; j <= width; j++) {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// function squares(count) {
//     for (let i = 1; i <= count; i++) {
//         square();
//         document.write("<br>");
//     }
// }

// const count = +prompt(`how many random squares do you want?`);
// squares(count);


// exercise 15
// function emptyRectangle(height, width) {
//     for (let i = 1; i <= height; i++) {
//         for (let j = 1; j <= width; j++) {
//             document.write(i === 1 || i === height || j === 1 || j === width ? "*" : "&nbsp;&nbsp;");
//         }
//         document.write("<br>");
//     }
// }

// const height = +prompt("please enter the height of the rectangle");
// const width = +prompt("please enter the height of the rectangle");
// emptyRectangle(height, width);


// exercise 16
// function numbers(num) {
//     for (let i = num; i >= 1; i--) {
//         document.write(`${i} `);
//     }
// }
// function triangle(size) {
//     for (let j = size; j >= 1; j--) {
//         numbers(j)
//         document.write("<br>")
//     }
// }

// const size = +prompt("please enter a number");
// triangle(size);


// exercise 17
// function numbers(num) {
//     for (let i = num; i >= 1; i--) {
//         document.write(`* `);
//     }
// }
// function triangle(size) {
//     for (let j = size; j >= 1; j--) {
//         numbers(j)
//         document.write("<br>")
//     }
// }

// const size = +prompt("please enter a number");
// triangle(size);


// exercise 18
// function numbers(num) {
//     for (let i = 1; i <= num; i++) {
//         document.write(`${i} `);
//     }
//     for (let i = 1; i <= num; i++) {
//         document.write(`* `);
//     }
// }
// function triangle(size) {
//     for (let j = size; j >= 1; j--) {
//         numbers(j)
//         document.write("<br>")
//     }
// }

// const size = +prompt("please enter a number");
// triangle(size);


// exercise 19
// function numbers(num) {
//     for (let i = 1; i <= num; i++) {
//         document.write(`* `);
//     }
// }
// function triangle(size) {
//     for (let j = size; j >= 1; j--) {
//         numbers(j)
//         document.write("<br>")
//     }
//     for (let k = 1; k <= size; k++) {
//         numbers(k)
//         document.write("<br>")
//     }
// }

// const size = +prompt("please enter a number");
// triangle(size);


// exercise 20 my way
// function pyramid(size) {
//     for (let i = 1; i <= size; i++) {
//         let count = 0
//         for (let j = size; j >= 1; j--) {
//             if (j <= i) {
//                 count++;
//                 document.write(count);
//             } else {
//                 document.write("&nbsp;&nbsp;");
//             }
//         }
//         for (let k = 1; k <= size; k++) {
//             if (k + 1 <= i) {
//                 count--;
//                 document.write(count);
//             } else {
//                 document.write("&nbsp;&nbsp;");
//             }
//         }
//         document.write("<br>")
//     }
// }

// const size = +prompt("please enter the size of the pyramid");
// pyramid(size)

// exercise 20 shahar way
// function pyramid(size) {
//     for (let row = 1; row <= size; row++) {
//         for (let blanksLeft = 1; blanksLeft <= size - row; blanksLeft++) {
//             document.write('&nbsp;&nbsp;')
//         }
//         for (let colLeft = 1; colLeft <= row; colLeft++) {
//             document.write(colLeft)
//         }
//         for (let colRight = row - 1; colRight >= 1; colRight--) {
//             document.write(colRight)
//         }
//         document.write('<br>')
//     }
// }
// const size = +prompt("please enter the size of the pyramid");
// pyramid(size)