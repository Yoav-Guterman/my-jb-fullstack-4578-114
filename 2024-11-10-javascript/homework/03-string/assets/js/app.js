// // exercise 1 with if
// const websiteUrl = prompt("please enter a website url");
// if (websiteUrl.endsWith('.com')) {
//     document.write(`the website Url: ${websiteUrl} is an International commercial website`)
// } else if (websiteUrl.endsWith('.org')) {
//     document.write(`the website Url: ${websiteUrl} is an International organization website`)
// } else if (websiteUrl.endsWith('.co.il')) {
//     document.write(`the website Url: ${websiteUrl} is an israeli commercial website`)
// } else if (websiteUrl.endsWith('.org.il')) {
//     document.write(`the website Url: ${websiteUrl} is an israeli organization website`)
// } else if (websiteUrl.endsWith('.gov.il')) {
//     document.write(`the website Url: ${websiteUrl} is an israeli government website`)
// } else {
//     document.write("the website ends with different ending")
// }

// exercise 1 with switch
// const websiteUrl = prompt("please enter a website url");
// switch (true) {
//     case websiteUrl.endsWith('.com'):
//         document.write(`the website Url: ${websiteUrl} is an International commercial website`)
//         break;

//     case websiteUrl.endsWith('.org'):
//         document.write(`the website Url: ${websiteUrl} is an International organization website`)
//         break;

//     case websiteUrl.endsWith('.co.il'):
//         document.write(`the website Url: ${websiteUrl} is an israeli commercial website`)
//         break;

//     case websiteUrl.endsWith('.org.il'):
//         document.write(`the website Url: ${websiteUrl} is an israeli organization website`)
//         break;

//     case websiteUrl.endsWith('.gov.il'):
//         document.write(`the website Url: ${websiteUrl} is an israeli government website`)
//         break;

//     default:
//         document.write("the website ends with different ending")
// }


// exercise 2 with array
// const file = prompt("please enter a photo file");
// isPhoto = false;
// photoArray = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp', '.webp'];

// for (const item of photoArray) {
//     if (file.endsWith(item) === true) {
//         isPhoto = true;
//         break;
//     }
// }
// document.write(isPhoto ? `the file ${file} is a Photo` : `the file ${file} is NOT a Photo`);

// exercise 2 with if
// const file = prompt("please enter a photo file");
// document.write(file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.tiff') || file.endsWith('.bmp') || file.endsWith('.webp') ? `the file ${file} is a photo` : `the file ${file} is NOT a photo`)


//exercise 3 with if
// const phoneNumber = prompt("please enter a phone number");
// document.write(phoneNumber.startsWith('05') && !isNaN(phoneNumber) === true && phoneNumber.length === 10 ? "Valid Number" : "Invalid Number");


// exercise 4
// const password = prompt("please enter a password");

// let hasUpper = false, hasLower = false, hasDigit = false, hasSpecial = false;
// for (const char of password) {
//     if (/[A-Z]/.test(char)) hasUpper = true;
//     else if (/[a-z]/.test(char)) hasLower = true;
//     else if (/\d/.test(char)) hasDigit = true;
//     else if (!/[A-Za-z\d]/.test(char)) hasSpecial = true;
// }

// document.write(`your password is: ${password}<br>`);
// if (hasUpper === true && hasLower === true && hasDigit === true && hasSpecial === true && password.length >= 6) {
//     document.write("strong password!<br>")
// } else {
//     document.write("you must change the password according the instructions:<br><br>")
// }

// if (!hasUpper) {
//     document.write("The password must contain at least one uppercase letter.<br>")
// };
// if (!hasLower) {
//     document.write("The password must contain at least one lowercase letter.<br>")
// };
// if (!hasDigit) {
//     document.write("The password must contain at least one digit.<br>");
// }
// if (!hasSpecial) {
//     document.write("The password must contain at least one special character.<br>")
// };
// if (password.length < 6) {
//     document.write("The password is too short. It must be at least 6 characters long.<br>")
// }