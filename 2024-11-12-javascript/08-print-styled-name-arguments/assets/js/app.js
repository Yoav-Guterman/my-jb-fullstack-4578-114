const firstName = prompt('enter first name');
const lastName = prompt('enter last name');

function printStyledName(name) {
    document.write(`${name[0].toUpperCase()}${name.substring(1)}`);
}


printStyledName(firstName);
document.write(" ")
printStyledName(lastName);