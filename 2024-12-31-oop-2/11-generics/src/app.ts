import Dog from "./dog.js";
import Cat from "./cat.js";

const dog: Dog = {
    type: 'mixed',
    name: 'noop',
    weight: 30,
    breed: 'afghan hound'
}

const cat: Cat = {
    type: 'mixed',
    name: 'Eden',
    weight: 8,
    numberOfSouls: 4
}

// function clone(dog: Dog): Dog {
//     return { ...dog }
// }

function clone<T>(obj: T): T {
    return { ...obj }
}
const anotherCat = clone(cat)
console.log(cat)


const aDuplicationOfDog = { ...dog }
const anotherDuplicationOfDog = clone(dog)



console.log(dog)
console.log(aDuplicationOfDog)