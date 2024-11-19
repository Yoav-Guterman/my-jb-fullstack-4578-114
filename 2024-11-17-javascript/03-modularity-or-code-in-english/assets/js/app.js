function inputIsDivider(input, divider) {
    return (input % divider === 0)
}

function displayInputPower(input, power) {
    console.log(input ** power)
}

function getInputFromUser() {
    return +prompt('enter a number')
}

// main
let input = getInputFromUser()

function userStillWantsToContinue(input) {
    return input !== 0
}

getInputFromUser()

while (userStillWantsToContinue(input)) {
    if (inputIsDivider(input, 2)) {
        displayInputPower(input, 2)
    }
    if (inputIsDivider(input, 3)) {
        displayInputPower(input, 3)
    }
    input = getInputFromUser()
}



// 1. layout the code from user
// 2. data flow
// 3. DRY