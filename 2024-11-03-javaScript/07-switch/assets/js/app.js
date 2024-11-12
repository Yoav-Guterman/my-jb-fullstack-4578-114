const num = +prompt("enter a number between 1-5")

// if (number === 1) {
//     document.write("one")
// } else if (number === 2) {
//     document.write("two")
// } else if (number === 3) {
//     document.write("three")
// } else if (number === 4) {
//     document.write("four")
// } else if (number === 5) {
//     document.write("five")
// } else {
//     document.write("not a valid number")
// }

// when we have a single input,
// from which we can diverse into various outputs
// we should use the "switch" command

switch (num) {
    case 1:
        document.write("one")
        break;
    case 2:
        document.write("two")
        break;
    case 3:
        document.write("three")
        break;
    case 4:
        document.write("four")
        break;
    case 5:
        document.write("five")
        break;
    default:
        document.write("invalid input")
}