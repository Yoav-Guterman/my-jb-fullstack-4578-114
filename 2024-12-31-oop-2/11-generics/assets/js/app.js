const dog = {
    type: 'mixed',
    name: 'noop',
    weight: 30,
    breed: 'afghan hound'
};
const cat = {
    type: 'mixed',
    name: 'Eden',
    weight: 8,
    numberOfSouls: 4
};
// function clone(dog: Dog): Dog {
//     return { ...dog }
// }
function clone(obj) {
    return Object.assign({}, obj);
}
const anotherCat = clone(cat);
console.log(cat);
const aDuplicationOfDog = Object.assign({}, dog);
const anotherDuplicationOfDog = clone(dog);
console.log(dog);
console.log(aDuplicationOfDog);
export {};
