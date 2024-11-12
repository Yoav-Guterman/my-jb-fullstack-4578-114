// exercise 1
// let num = +prompt("please enter a number");
// while (num > 0) {
//     for (let i = 1; i <= num; i++) {
//         document.write(`the number ${i} out of ${num}<br>`);
//     }
//     document.write(`<br>`)
//     num = +prompt("please enter a number");
// }

// exercise 2
// let num = +prompt("please enter a number");
// while (num > 0) {
//     for (let i = num; i >= 1; i--) {
//         document.write(`the number ${i} out of ${num}<br>`);
//     }
//     document.write(`<br>`)
//     num = +prompt("please enter a number");
// }

// exercise 3
// let num = +prompt("please enter a number");
// while (num > 0) {
//     for (let i = 2; i <= num; i += 2) {
//         document.write(`the number ${i} out of ${num}<br>`);
//     }
//     document.write(`<br>`)
//     num = +prompt("please enter a number");
// }

// exercise 4
// let num = +prompt("please enter a number");
// while (num > 0) {
//     for (let i = num; i >= 1; i--) {
//         document.write(i % 2 === 0 ? `the number ${i}<br>` : ``)
//     }
//     document.write(`<br>`)
//     num = +prompt("please enter a number");
// }

// exercise 5
// const size = +prompt("please enter a number")
// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// exercise 6
// const height = +prompt("please enter a height")
// const width = +prompt("please enter a width")
// for (let i = 1; i <= height; i++) {
//     for (let j = 1; j <= width; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// exercise 7
// const size = +prompt("please enter a height")
// for (let i = size; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// exercise 8
// const size = +prompt("please enter a height")
// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }

// exercise 9
// const size = +prompt("please enter a height")
// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//         document.write((size + 1) - j)
//     }
//     document.write("<br>")
// }

// exercise 10
// const size = +prompt("please enter a height")
// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }
// for (let i = size; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }

// exercise 11
// const size = +prompt("please enter a height")
// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }
// for (let i = size - 1; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }

// exercise 12
// const size = +prompt("please enter a height")
// for (let i = 1; i <= size; i += 2) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }
// for (let i = size - 2; i >= 1; i -= 2) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j)
//     }
//     document.write("<br>")
// }

// exercise 13
// const height = +prompt("please enter a height")
// const width = +prompt("please enter a width")
// for (let i = 1; i <= height; i++) {
//     if (i === 1 || i === height) {
//         for (let j = 1; j <= width; j++) {
//             document.write("*")
//         }
//     } else {
//         for (let j = 1; j <= width; j++) {
//             document.write(j === 1 || j === width ? "*" : "&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }


// exercise 14
// let num = +prompt("please enter a number")
// let sum = 0;
// let cloneNum;
// while (num > 0) {
//     cloneNum = num;
//     sum = 0;
//     while (cloneNum !== 0) {
//         sum = sum + (cloneNum % 10);
//         cloneNum = parseInt(cloneNum / 10);
//     }
//     document.write(`the sum of the number: ${num} is: ${sum}<br>`)
//     alert(`the sum of the number: ${num} is: ${sum}`)
//     num = +prompt("please enter a number")
// }

// exercise 15
// let num = +prompt("please enter a number");
// let count = 0;
// while (num > 0) {
//     cloneNum = num;
//     count = 0;
//     while (cloneNum !== 0) {
//         count++;
//         cloneNum = parseInt(cloneNum / 10);
//     }
//     document.write(`the number: ${num} has: ${count} digits <br>`);
//     alert(`the number: ${num} has: ${count} digits`);
//     num = +prompt("please enter a number");
// }

// exercise 16
let count = 0;
let num = +prompt("enter a number");
for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= num; j++) {
        if (j < i) {
            document.write("&nbsp;&nbsp;");
        } else {
            count++;
            document.write(count);
        }
    }
    for (let k = 1; k <= num; k++) {
        document.write(count > 1 ? count - 1 : "&nbsp;&nbsp;")
        count--;
    }
    document.write("<br>");
    count = 0;
}