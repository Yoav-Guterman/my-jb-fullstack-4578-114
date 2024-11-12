//exercise 1
// const toyota = {
//     model: 'Toyota corola',
//     year: 2022,
//     color: 'white',
// }

// const mazda = {
//     model: 'mazda 3',
//     year: 2020,
//     color: 'gray',
// }

// const tesla = {
//     model: 'cybertruck',
//     year: 2022,
//     color: 'white',
// }

// const cars = [toyota, mazda, tesla]

// for (const car of cars) {
//     console.log(`properties of ${car.model}:`);
//     for (const property in car) {
//         console.log(`${property} value is ${car[property]}`)
//     }
// }

//exercise 2
// const clothes = [
//     {
//         type: 'dress',
//         size: 'small',
//         price: 200,
//         color: 'red'
//     },
//     {
//         type: 't-shirt',
//         size: 'large',
//         price: 50,
//         color: 'black'
//     },
//     {
//         type: 'jeans',
//         size: 'medium',
//         price: 100,
//         color: 'blue'
//     },
//     {
//         type: 'skirt',
//         size: 'x-small',
//         price: 80,
//         color: 'white'
//     },
//     {
//         type: 'pants',
//         size: 'large',
//         price: 30,
//         color: 'gray'
//     }
// ]

// for (let i = 0; i < clothes.length; i++) {
//     console.log(`${clothes[i].type} properties:`)
//     for (const property in clothes[i]) {
//         console.log(`${property}: ${clothes[i][property]}`)
//     }
// }


// exercise 3
// const locations = [];

// for (let i = 1; i <= 3; i++) {
//     const latitude = +prompt(`enter the latitude for location ${i}:`);
//     const longitude = +prompt(`enter the longitude for location ${i}:`);

//     const location = {
//         latitude: latitude,
//         longitude: longitude
//     }

//     locations.push(location);
// }

// for (let i = 0; i < locations.length; i++) {
//     for (const property in locations[i]) {
//         console.log(`location ${i + 1}, ${property}: ${locations[i][property]}`)
//         document.write(`location ${i + 1}, ${property}: ${locations[i][property]}<br>`)
//     }
// }



// other stuff - not homework
// for(const friend of friends) {
//     console.log(`properties of ${friend.name}:`)
//     for(const property in friend) {
//         console.log(`${property} value is ${friend[property]}`)
//     }
// }

// console.log(`I have ${friends.length} friends`)

// friends.splice(1,1)

// console.log(`I have ${friends.length} friends`)


// const musicBands = [
//     {
//         name: 'Nirvana',
//         style: 'Rock'
//     },
//     {
//         name: 'Beatles',
//         style: 'Rock'
//     },
//     {
//         name: 'Mashina',
//         style: 'Israeli'
//     }
// ]

// console.log(`there are ${musicBands.length} bands in my collection`)