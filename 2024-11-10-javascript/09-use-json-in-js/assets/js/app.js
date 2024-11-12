// const students = [
//     {
//         firstName: 'ori',
//         lastName: 'yarivi',
//         grades: [97, 95, 93]

//     },
//     {
//         firstName: 'ariel',
//         lastName: 'hayon',
//         grades: [100, 100, 100]
//     },
//     {
//         firstName: 'ofir',
//         lastName: 'yan',
//         grades: [40, 50, 60]
//     }
// ]

// const jsonString = JSON.stringify(students)
// document.write(jsonString);
// document.write("<hr>");

// console.log(students);
// console.log(jsonString);

// const friendsFromInstegram = `[{"firstName":"yossi","lastName":"yarivi","grades":[97,95,93]},{"firstName":"ariel","lastName":"hayon","grades":[100,100,100]},{"firstName":"ofir","lastName":"yan","grades":[40,50,60]}]`


// const friends = JSON.parse(friendsFromInstegram);
// console.log(friends)

const shop = {
    storeName: "flower shop",
    city: "herzeliya",
    street: "hayarden",
    houseNumber: 5,
    inventoryType: "flowers"
}

const jsonstring = JSON.stringify(shop);
document.write(jsonstring);
document.write("<hr>");

const flowerShops = JSON.parse(jsonstring);
console.log(flowerShops)
