//functions
function getUserInput() {
    const input = +prompt('please enter a number')
    return input
}

function inputNumberInTheCondition(input) {
    return input !== 0
}

function isNumberHas7(number) {
    return number.toString().includes("7")
}

function isNumberDividesBy7(number) {
    return number % 7 === 0
}

//main

let input = getUserInput()

while (inputNumberInTheCondition(input)) {
    document.write(`limit number is: ${input}<br>`)
    for (let i = 1; i <= input; i++) {
        document.write(isNumberHas7(i) || isNumberDividesBy7(i) ? "BOOM" : i)
        document.write("<br>")
    }
    input = getUserInput()
    document.write("<br>")
}