// let num = +prompt("enter a num");

// while (num !== 0) {
//     alert(num % 7 === 0)
//     num = +prompt("enter a num");
// }

let num = +prompt("enter a num");
let message;
while (num !== 0) {
    alert(num % 7 === 0 ? 'divide' : 'doesnt divide')
    num = +prompt("enter a num");
}