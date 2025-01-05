import MusicShop from "./musicShop.js";
export default class Piano extends MusicShop {
    constructor(model, maker, color, numberOfKeys) {
        super(model, maker, color);
        this.numberOfKeys = numberOfKeys;
    }
    display() {
        console.log(`model is: ${this.model}`);
        console.log(`maker is: ${this.maker}`);
        console.log(`color is: ${this.color}`);
        console.log(`numberOfKeys is: ${this.numberOfKeys}`);
    }
    makeSound() {
        console.log(`Making piano sound`);
    }
    test() {
        console.log('testing the piano');
    }
    tune() {
        console.log('tuning the piano');
    }
}
