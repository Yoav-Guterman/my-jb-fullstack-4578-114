import MusicShop from "./musicShop.js";
export default class Guitar extends MusicShop {
    constructor(model, maker, color, numberOfStrings) {
        super(model, maker, color);
        this.numberOfStrings = numberOfStrings;
    }
    display() {
        console.log(`model is: ${this.model}`);
        console.log(`model is: ${this.maker}`);
        console.log(`model is: ${this.color}`);
        console.log(`model is: ${this.numberOfStrings}`);
    }
    makeSound() {
        console.log(`Making Guitar sound`);
    }
    test() {
        console.log('testing the guitar');
    }
    tune() {
        console.log('tuning the guitar');
    }
}
