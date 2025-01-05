import Piano from "./piano.js";
export default class GrandPiano extends Piano {
    constructor(model, maker, color, numberOfKeys, length) {
        super(model, maker, color, numberOfKeys);
        this.length = length;
    }
    display() {
        super.display();
        console.log(`length is: ${this.length}`);
    }
    makeSound() {
        console.log(`Making grand piano sound`);
    }
}
