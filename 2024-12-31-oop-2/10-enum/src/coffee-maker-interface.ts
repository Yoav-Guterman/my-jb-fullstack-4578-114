import Maker from "./makers.js";
import Voltage from "./voltage.js";

export default interface CoffeeMakerInterface {
    numberOfPins: number,
    numberOfMilkHotters: number,
    make: Maker,
    voltage: Voltage
}