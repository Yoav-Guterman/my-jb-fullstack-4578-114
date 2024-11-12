// const grades = [97, 66, 73, 88, 55, 78]
// document.write(`the grades array is: ${grades}<br>`)

//exercise 1
// const names = ['yoav', 'ori', 'moshe', 'uzi', 'loren'];

// document.write(`${names[0]} ${names[names.length - 1]}<br>`)
// document.write(`${names[0]}<br>${names[names.length - 1]}<br>`)

// for (i = names.length - 1; i >= 0; i--) {
//     document.write(` ${names[i]}`)
// }

//exercise 2
// const songs = [];
// let song;
// for (i = 1; i <= 3; i++) {
//     song = prompt("please enter a song");
//     songs.push(song);
// }

// for (const item of songs) {
//     document.write(`song name: ${item}<br>`);
// }

// songs.splice(1, 1);

// for (const item of songs) {
//     document.write(`song name: ${item}<br>`);
// }

// exercise 3
// const grades = [];
// const invalidGrades = []
// let grade;
// for (i = 1; i <= 10; i++) {
//     grade = +prompt('please enter a grade');
//     grades.push(grade);
// }
// for (const item of grades) {
//     document.write(`grade: ${item}<br>`)
//     if (item < 0 || item > 100) {
//         invalidGrades.push(item)
//     }
// }
// document.write("</br>")
// if (invalidGrades.length >= 1) {
//     document.write(`<br>there are ${invalidGrades.length} invalid grades.<br>`)
//     for (const invalidItem of invalidGrades) {
//         document.write(`invalid grade: ${invalidItem}<br>`)
//     }
// } else {
//     document.write("all grades are valid!")
// }

// exercise 4 - 4
// const numbers = [];
// let randomNumber;
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = numbers.length - 1; j >= 0; j--) {
//     document.write(`${numbers[j]} | `);
//     sum += numbers[j]
// }
// document.write(`<br>sum of all numbers: ${sum}<br>the avg of all numbers: ${sum / 100}`)

// exercise 4 - 5
// const numbers = [];
// let randomNumber;
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = 0; j < numbers.length; j++) {
//     if (numbers[j] % 2 === 0) {
//         document.write(`${numbers[j]} | `);
//         sum += numbers[j]
//     }
// }
// document.write(`<br>sum of all numbers: ${sum}<br>the avg of all numbers: ${sum / 100}`)

// exercise 4 - 6
// const numbers = [];
// let randomNumber;
// let sum = 0;
// let count = 0;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = 0; j < numbers.length; j++) {
//     if (numbers[j] % 2 !== 0) {
//         document.write(`${numbers[j]} | `);
//         sum += numbers[j]
//         count++
//     }
// }
// document.write(`<br>sum of all numbers: ${sum}<br>the avg of all numbers: ${sum / 100}<br>`)
// document.write(`number of odd numbers: ${count}`)

// exercise 4 - 7
// const numbers = [];
// let randomNumber;
// let max = 0;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = 0; j < numbers.length; j++) {
//     document.write(`${numbers[j]} | `);
//     if (numbers[j] > max) {
//         max = numbers[j]
//     }
// }
// document.write(`<br>bigges number is: ${max}`)

// exercise 4 - 8
// const numbers = [];
// let randomNumber;
// let min = 101;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = 0; j < numbers.length; j++) {
//     document.write(`${numbers[j]} | `);
//     if (numbers[j] < min) {
//         min = numbers[j]
//     }
// }
// document.write(`<br>smallest number is: ${min}`)

// exercise 4 - 9
// const numbers = [];
// let randomNumber;
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = 0; j < numbers.length; j++) {
//     document.write(`${numbers[j]} | `);
//     sum += numbers[j];
// }
// const avg = sum / 100
// document.write(`<br>sum of all numbers: ${sum}<br>the average is: ${avg}<br>`);
// for (let k = 0; k < numbers.length; k++) {
//     if (numbers[k] > avg) {
//         document.write(`${numbers[k]} | `);
//     }
// }

// exercise 4 - 10
// const numbers = [];
// let randomNumber;
// let sum = 0;
// let count = 0;
// for (let i = 0; i < 100; i++) {
//     randomNumber = parseInt((Math.random() * 100) + 1);
//     numbers.push(randomNumber);
// }
// for (let j = 0; j < numbers.length; j++) {
//     document.write(`${numbers[j]} | `);
//     sum += numbers[j];
// }
// const avg = sum / 100
// document.write(`<br>sum of all numbers: ${sum}<br>the average is: ${avg}<br>`);
// for (let k = 0; k < numbers.length; k++) {
//     if (numbers[k] < avg) {
//         document.write(`${numbers[k]} | `);
//         count++
//     }
// }
// document.write(`<br>the amount of numbers below average: ${count}`);