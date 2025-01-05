import Animal from "./animal.js"

// export default class AnimalService {
//     getAnimalFromDatabase(): Animal[] {
//         // fetches animals from database
//         return [new Animal(2), new Animal(4), new Animal(6)]
//     }
// }

export default class AnimalService {
    getAnimalFromDatabase(): Animal[] {
        // fetches animals from database
        return [new Animal(2), new Animal(4), new Animal(6)]
    }
}