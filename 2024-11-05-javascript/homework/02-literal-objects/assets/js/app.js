// exercise 1
// const rectangle = {
//     width: 5,
//     height: 10,
//     color: "blue",
//     xPosition: 2,
//     yPosition: 3
// }

// document.write(`rectangle width is: ${rectangle['width']}<br>`)
// document.write(`rectangle height is: ${rectangle['height']}<br>`)
// document.write(`rectangle color is: ${rectangle['color']}<br>`)
// document.write(`rectangle x Position is: ${rectangle['xPosition']}<br>`)
// document.write(`rectangle yPosition is: ${rectangle['yPosition']}<br>`)


// for (const property in rectangle) {
//     document.write(`rectangle ${property} is: ${rectangle[property]}<br>`)
// }

// exercise 2
// const employee = {
//     firstName: "ori",
//     lastName: "yanivi",
//     salary: 10000,
//     email: "oriyanivi@gmail.com",
//     phoneNumber: "054-560-8343"
// }

// document.write(`employee name is: ${employee['firstName']}<br>`)
// document.write(`employee family name is: ${employee['lastName']}<br>`)
// document.write(`employee salary name is: ${employee['salary']}<br>`)
// document.write(`employee email name is: ${employee['email']}<br>`)
// document.write(`employee phoneNumber name is: ${employee['phoneNumber']}<br>`)

// for (const property in employee) {
//     document.write(`employee ${property} is: ${employee[property]}<br>`)
// }

// exercise 3
// const clothingItem = {
//     brand: "hadidass",
//     size: 44,
//     color: "white",
//     price: "300$"
// }

// document.write(`clothing item brand is: ${clothingItem["brand"]}<br>`)
// document.write(`clothing item size is: ${clothingItem["size"]}<br>`)
// document.write(`clothing item color is: ${clothingItem["color"]}<br>`)
// document.write(`clothing item price is: ${clothingItem["price"]}<br>`)

// document.write(`<br>`)

// for (const property in clothingItem) {
//     document.write(`clothing item ${property} is: ${clothingItem[property]}<br>`)
// }

// document.write(`<br>second item is:<br>`)


// const clothingBrand = prompt("please enter your brand")
// const clothingSize = +prompt("please enter your size")
// const clothingColor = prompt("please enter your color")
// const clothingPrice = prompt("please enter your Price")


// clothingItem.brand = clothingBrand
// clothingItem.size = clothingSize
// clothingItem.color = clothingColor
// clothingItem.price = clothingPrice

// document.write(`clothing item brand is: ${clothingItem["brand"]}<br>`)
// document.write(`clothing item size is: ${clothingItem["size"]}<br>`)
// document.write(`clothing item color is: ${clothingItem["color"]}<br>`)
// document.write(`clothing item price is: ${clothingItem["price"]}<br>`)

// document.write(`<br>`)

// for (const property in clothingItem) {
//     document.write(`clothing item ${property} is: ${clothingItem[property]}<br>`)
// }

// exercise 4
// const creditCard = {
//     type: 'Mastercard',
//     number: '1234-1234-1234-1234',
//     expiration: '12-12',
//     cvc: '123'
// }

// document.write(`your credit card type is: ${creditCard['type']}<br>`);
// document.write(`your credit card number is: ${creditCard['number']}<br>`);
// document.write(`your credit card expiration is: ${creditCard['expiration']}<br>`);
// document.write(`your credit card cvc is: ${creditCard['cvc']}<br>`);

// document.write(`<br>`);


// for (const property in creditCard) {
//     document.write(`your credit card ${property} is: ${creditCard[property]}<br>`);
// }


// exercise 5
// const creditCard = {
//     type: 'Mastercard',
//     number: '1234-1234-1234-1234',
//     expiration: '12-12',
//     cvc: '123'
// }

// const customer = {
//     firstName: 'israel',
//     familyName: 'israeli',
//     email: 'israelisraeli@gmail.com',
//     card: creditCard
// }

// document.write(`customer first name is: ${customer['firstName']}<br>`);
// document.write(`customer family name is: ${customer['familyName']}<br>`);
// document.write(`customer email is: ${customer['email']}<br>`);
// document.write(`customer card type is: ${customer['card']['type']}<br>`);
// document.write(`customer card number is: ${customer['card']['number']}<br>`);
// document.write(`customer card expiration is: ${customer['card']['expiration']}<br>`);
// document.write(`customer card cvc is: ${customer['card']['cvc']}<br>`);

// for (let property in customer) {
//     if (property === 'card') {
//         for (let cardProperty in customer[property]) {
//             document.write(`customer ${cardProperty} is: ${customer[property][cardProperty]}<br>`);
//         }
//     } else {
//         document.write(`customer ${property} is: ${customer[property]}<br>`);
//     }
// }