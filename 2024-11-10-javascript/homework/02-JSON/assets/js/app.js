// exercise 1
// const books = [
//     {
//         ID: '12345',
//         name: 'Harry Potter',
//         author: 'JK Rowlling',
//         price: 100
//     },
//     {
//         ID: '12346',
//         name: 'Atomic habits',
//         author: 'James Clear',
//         price: 120
//     },
//     {
//         ID: '12347',
//         name: 'The lazy investor',
//         author: 'Tamir Mandovsky',
//         price: 50
//     }
// ]
// console.log(books)
// const jsonString = JSON.stringify(books)
// console.log(jsonString)


// const items = JSON.parse(jsonString)
// console.log(items)

// for (const item of items) {
//     for (const property in item) {
//         document.write(`Book ${property}: ${item[property]}<br>`)
//     }
//     document.write("<hr>")
// }


// exercise 2:
const myCat = {
    name: 'ginjo',
    age: 2,
    color: 'orange',
    isSterile: true
}

console.log(myCat)
const jsonString = JSON.stringify(myCat)
console.log(jsonString)

const yourCat = JSON.parse(jsonString)
console.log(yourCat)

document.write(`
    Name: ${yourCat.name}<br>
    Age: ${yourCat.age}<br>
    Color: ${yourCat.color}<br>
    Is Sterile: ${yourCat.isSterile}
`);