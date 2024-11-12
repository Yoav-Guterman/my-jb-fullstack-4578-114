// historic way of using variables

// historic way of using variables
var companyName = 'KSP';

//starting 2015, usage of var is wrong
// don't use var


document.write(companyName);
document.write("\n");
document.write(companyName);
//using \n in document.write won't work for us
document.write(companyName);
document.write("<br>");
document.write(companyName);

alert(companyName + "\n" + companyName)
console.log(companyName + "\n" + companyName)

// KSP is a great company, everybody likes KSP, KSP have the best products

document.write("<br> KSP is a great company, everybody likes KSP, KSP have the best products");
document.write("<br>" + companyName + " is a great company, everybody likes " + companyName + ", " + companyName + " have the best products");
document.write(`<br> ${companyName} is a great company, everybody likes ${companyName}, ${companyName} have the best products`);

// we can use let to declare a variable
let changableVariable;
// and then assign (assign = השמה)
changableVariable = 1;

changableVariable += 3

// sometimes, i want to protect a variable from modification
const noneChangableVariable = 10;