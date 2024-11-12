let num = +prompt("enter a num");
let sum = 0;
while (num !== 0) {
    sum = sum + num;
    alert(sum);
    num = +prompt("enter a num");
}
alert(sum);