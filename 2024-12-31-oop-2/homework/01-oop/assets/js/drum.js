import MusicShop from "./musicShop.js";
export default class Drum extends MusicShop {
    constructor(model, maker, color, diameter) {
        super(model, maker, color);
        this.diameter = diameter;
    }
    display() {
        console.log(`model is: ${this.model}`);
        console.log(`model is: ${this.maker}`);
        console.log(`model is: ${this.color}`);
        console.log(`model is: ${this.diameter}`);
    }
    makeSound() {
        console.log(`Making drum sound`);
    }
    test() {
        console.log('testing the drums');
    }
    tune() {
        console.log('tuning the drums');
    }
}
