// exercise 1
// function averageCalculation(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return (sum / array.length);
// }

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [7, 8, 9, 4, 5, 6];
// const array3 = [12, 34, 56, 78, 91, 23];
// document.write(`avg of array 1: ${averageCalculation(array1)}<br>`);
// document.write(`avg of array 2: ${averageCalculation(array2)}<br>`);
// document.write(`avg of array 3: ${averageCalculation(array3)}<br>`);

// exercise 2
// function minCalculation(array) {
//     let min = 9999999;
//     for (const item of array) {
//         min = item < min ? item : min;
//     }
//     return min;
// }

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [7, 8, 9, 4, 5, 6];
// const array3 = [12, 34, 56, 78, 91, 23];
// document.write(`minimum value of array 1: ${minCalculation(array1)}<br>`);
// document.write(`minimum value of array 2: ${minCalculation(array2)}<br>`);
// document.write(`minimum value of array 3: ${minCalculation(array3)}<br>`);

// exercise 3
// function longestStringCalculation(array) {
//     let max = 0;
//     for (const item of array) {
//         max = item.length > max ? item.length : max;
//     }
//     return max;
// }

// const array1 = ['dog', 'lower', 'gold', 'godly', 'golden'];
// const array2 = ['dog', 'lower', 'gold digger', 'godly', 'golden'];
// const array3 = ['dog with a smile', 'lower', 'gold digger', 'godly', 'golden'];
// document.write(`longest string of array 1: ${longestStringCalculation(array1)}<br>`);
// document.write(`longest string of array 2: ${longestStringCalculation(array2)}<br>`);
// document.write(`longest string of array 3: ${longestStringCalculation(array3)}<br>`);


// exercise 4
// function longestStringCalculation(array) {
//     let max = 0;
//     let maxString = "";
//     for (const item of array) {
//         if (item.length > max) {
//             max = item.length;
//             maxString = item
//         }
//     }
//     return maxString;
// }

// const array1 = ['dog', 'lower', 'gold', 'godly', 'golden'];
// const array2 = ['dog', 'lower', 'gold digger', 'godly', 'golden'];
// const array3 = ['dog with a smile', 'lower', 'gold digger', 'godly', 'golden'];
// document.write(`longest string of array 1: ${longestStringCalculation(array1)}<br>`);
// document.write(`longest string of array 2: ${longestStringCalculation(array2)}<br>`);
// document.write(`longest string of array 3: ${longestStringCalculation(array3)}<br>`);


// exercise 5
// function aboveAverageCalculation(array) {
//     let count = 0;
//     let sum = 0;
//     let average = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     average = sum / array.length
//     for (const item of array) {
//         if (item > average) count++;
//     }

//     return count;
// }

// const array1 = [1, 2, 3, 1, 8, 6];
// const array2 = [100, 1, 2, 3, 4, 5];
// const array3 = [1, 99, 100, 101, 102, 103];
// document.write(`longest string of array 1: ${aboveAverageCalculation(array1)}<br>`);
// document.write(`longest string of array 2: ${aboveAverageCalculation(array2)}<br>`);
// document.write(`longest string of array 3: ${aboveAverageCalculation(array3)}<br>`);


// exercise 6
// function aboveAverageCalculation(array) {
//     let min = 9999;
//     let indexMinInArray;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//             indexMinInArray = i
//         }
//     }

//     return indexMinInArray;
// }

// const array1 = [1, 2, 3, 1, 8, 6];
// const array2 = [100, 1, 2, 3, 4, 1];
// const array3 = [1, 99, 100, 101, 102, 0];
// document.write(`longest string of array 1: ${aboveAverageCalculation(array1)}<br>`);
// document.write(`longest string of array 2: ${aboveAverageCalculation(array2)}<br>`);
// document.write(`longest string of array 3: ${aboveAverageCalculation(array3)}<br>`);


// exercise 7 with for of
// function maximunNumberCalculation(array) {
//     let max = 0;
//     for (let row of array) {
//         for (const cell of row) {
//             max = cell > max ? cell : max;
//         }
//     }
//     return max;
// }

// const matrix = [
//     [1, 2, 3, 1, 888, 6],
//     [100, 1, 2, 3, 4, 1],
//     [1, 99, 100, 101, 102, 0]
// ]
// document.write(`biggest number in matrix: ${maximunNumberCalculation(matrix)}<br>`);


// exercise 7 with for i
// function maximunNumberCalculation(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             max = array[i][j] > max ? array[i][j] : max;
//         }
//     }

//     return max;
// }

// const matrix = [
//     [1, 2, 3, 1, 888, 6],
//     [100, 1, 2, 3, 999, 1],
//     [1, 99, 100, 1001, 102, 0]
// ]
// document.write(`biggest number in matrix: ${maximunNumberCalculation(matrix)}<br>`);


// exercise 8
// function sumCalculation(array) {
//     let sum = 0;
//     for (let row of array) {
//         for (const cell of row) {
//             sum += cell
//         }
//     }
//     return sum;
// }

// const matrix = [
//     [1, 2, 3, 1, 888, 6],
//     [100, 1, 2, 3, 4, 1],
//     [1, 99, 100, 101, 102, 1000]
// ]
// document.write(`sum of all numbers in matrix: ${sumCalculation(matrix)}<br>`);


// exercise 9
// function isMultiplicationTable(array) {
//     if (array.length === 0) return false // check if the array is empty
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (array[i][j] !== (j + 1) * (i + 1)) return false
//         }
//     }
//     return true;
// }

// const matrix = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
//     [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
//     [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
//     [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
//     [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
//     [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
//     [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
//     [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
//     [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// ]
// document.write(`if multiplication table is valid? ${isMultiplicationTable(matrix)}<br>`);


// exercise 10
// function isPrimalNumber(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }

// const num = +prompt("please enter a number");
// document.write(`the number ${num} is primal? ${isPrimalNumber(num)}`)

// exercise 11
// function isPrimalNumber(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }

// function isArrayPrimal(array) {
//     if (array.length === 0) return undefined
//     for (const item of array) {
//         if (isPrimalNumber(item) === false) return false
//     }
//     return true
// }

// const array = [3, 5, 7, 11, 13, 17, 23, 29];
// document.write(`the numbers ${array} are primal? ${isArrayPrimal(array)}`);


// exercise 12
// function randomNumber(min, max) {
//     return parseInt(Math.random() * (max + 1 - min) + min)
// }

// const min = +prompt("please enter min number")
// const max = +prompt("please enter min number")

// document.write(`random number between ${min} to ${max}: ${randomNumber(min, max)}<br>`)
// document.write(`random number between ${min} to ${max}: ${randomNumber(min, max)}<br>`)
// document.write(`random number between ${min} to ${max}: ${randomNumber(min, max)}<br>`)


// exercise 13
// function randomNumber() {
//     return parseInt(Math.random() * 101);
// }

// function generateRandomArray(arraySize) {
//     let randomArray = [];
//     for (let i = 1; i <= arraySize; i++) {
//         randomArray.push(randomNumber());
//     }
//     return randomArray
// }

// for (let i = 1; i <= 3; i++) {
//     const arraySize = +prompt("please enter array size");
//     for (const item of generateRandomArray(arraySize)) {
//         document.write(`${item} | `);
//     }
//     document.write("<br>");
// }