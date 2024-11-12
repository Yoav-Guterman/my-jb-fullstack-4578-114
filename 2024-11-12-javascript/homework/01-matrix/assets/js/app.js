// // exercise 1 - 5
// const matrix = [
//     [12, 23, 34, 45],
//     [56, 67, 78, 89],
//     [10, 20, 30, 40]
// ];
// let sum = 0;
// let count = 0;
// let max = 0;
// let min = 100;
// for (const row of matrix) {
//     for (const cell of row) {
//         sum += cell
//         document.write(`${cell} | `);
//         max = cell > max ? cell : max;
//         min = cell < min ? cell : min;
//     }
//     document.write("<br>");
//     count += row.length;
// }
// document.write(`the sum is: ${sum}<br>and the average is: ${sum / count}<br>`);
// document.write(`the biggest number is: ${max}<br>the smallest number is: ${min}`);

// exercise 1 - 6
// const matrix = [
//     [12, 23, 34, 45],
//     [56, 67, 78, 89],
//     [10, 20, 30, 40]
// ];

// for (const row of matrix) {
//     for (const cell of row) {
//         document.write(cell % 7 === 0 ? `${cell} | ` : ` :( | `)
//     }
//     document.write("<br>")
// }
// document.write(`the sum is: ${sum}<br>and the average is: ${sum / count}<br>`);

// exercise 2
// const multiplicationBoard = [];

// for (let i = 1; i <= 10; i++) {
//     const row = [];
//     for (let j = 1; j <= 10; j++) {
//         const num = i * j;
//         row.push(num);
//     }
//     multiplicationBoard.push(row)
// }

// for (const row of multiplicationBoard) {
//     for (const cell of row) {
//         document.write(`${cell} | `)
//     }
//     document.write(`<br>`)
// }

// exercise 3