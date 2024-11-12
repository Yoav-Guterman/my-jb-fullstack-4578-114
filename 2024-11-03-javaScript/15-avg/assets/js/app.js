let num;
let count = 0;
let sum = 0

while (num !== 0) {
    num = +prompt("enter a num");
    sum = sum + num;
    count = count + 1;
}
alert(`avg is: ${sum / (count - 1)}`);