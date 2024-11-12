// let num;

// do {
//     num = +prompt('enter a number')
//     alert (num ** 2)
// } while (num !== 0);

let num;

do {
    num = +prompt("enter a number");
    alert(`the power 3 of ${num} is: ${num ** 3}`);
    document.write(`the power 3 of ${num} is: ${num ** 3}<br>`);
} while (num !== 0);