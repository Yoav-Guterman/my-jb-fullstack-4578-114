import CoffeeMaker from "./cofee.js";
import HotDogs from "./hotdog.js";
import Shnitzel from "./shnitzel.js";

export default class FoodTruck implements HotDogs, CoffeeMaker, Shnitzel {
    makeAmericano() {
        console.log('make americano')
        return {}
    }
    pan: object;
    fry(addon: object[]): object {
        console.log(`frying shnitzel`)
        return {}
    }
    espressoMachine: object;
    makeLatte(): object {
        console.log(`making coffee`)
        return {}
    }
    hotdogsMachine: object;
    makeHotdogs(): object {
        console.log(`making hot dogs`)
        return {}
    }

}