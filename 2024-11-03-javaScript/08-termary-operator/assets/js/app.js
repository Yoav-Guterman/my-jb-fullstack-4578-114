const grade = +prompt("enter a grade")
let message

// if (grade >= 60) {
//     message = "pass";
// } else {
//     message = "fail";
// }





// ternary operator - tenary means three, and thos is the only operator
// that works on 3 operands
// the format is:
// condition ? result for true : result for false
message = grade >= 60 ? 'pass' : "fail"

//can use as many ternary operators at once, please don't


document.write(message)