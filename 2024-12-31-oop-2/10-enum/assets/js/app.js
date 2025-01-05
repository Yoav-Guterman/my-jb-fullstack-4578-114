import Maker from "./makers.js";
import voltage from "./voltage.js";
const anotherCoffeeMaker = {
    numberOfMilkHotters: 2,
    numberOfPins: 4,
    voltage: voltage.V220,
    make: Maker.LAVAZA
};
console.log(anotherCoffeeMaker);
