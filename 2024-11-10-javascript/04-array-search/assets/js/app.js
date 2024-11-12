let randomNumber;
randomNumbers = []
for (i = 0; i < 100; i++) {
    randomNumber = (parseInt(Math.random() * 201) - 100);
    randomNumbers.push(randomNumber);
}
for (j = 0; j < randomNumbers.length; j++) {
    document.write(`${j + 1} number is: ${randomNumbers[j]}<br>`)
}

alert(randomNumbers)

const guess = +prompt("guess a number in the array")

let isBingo = false;
for (const randomNumber of randomNumbers) {
    if (randomNumber === guess) {
        isBingo = true
    }
}
document.write(isBingo ? 'Bingo' : 'No bingo')
