const firstName = prompt('enter first name');
const lastName = prompt('enter last name');

function printStyledFirstName() {
    console.log(`${firstName[0].toUpperCase()}${firstName.substring(1)}`)
}

function printStyledLastName() {
    console.log(`${lastName[0].toUpperCase()}${lastName.substring(1)}`)
}

function printStyledFullName() {
    printStyledFirstName()
}

printStyledFirstName();
printStyledLastName();

