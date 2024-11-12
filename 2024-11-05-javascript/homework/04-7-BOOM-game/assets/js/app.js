// 7 boom game
let isBoom = false;
const limit = +prompt("please enter your 7 boom limit number");
for (i = 1; i <= limit; i++) {
    isBoom = false;
    if (i % 7 === 0) {
        isBoom = true;
    } else {
        const digitsArray = i.toString().split("");
        for (j = 0; j < digitsArray.length; j++) {
            if (digitsArray[j] === "7") {
                isBoom = true;
                break;
            }
        }
    }
    document.write(isBoom === true ? "BOOM<br>" : i + "<br>")
}


// const num = 15;
// const sNum = num.toString()
// const arrayNum = sNum.split("")
// document.write(arrayNum)