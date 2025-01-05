import Piano from "./piano.js";

export default class GrandPiano extends Piano {
    constructor(
        model: string,
        maker: string,
        color: string,
        numberOfKeys: number,
        private length: number
    ) {
        super(model, maker, color, numberOfKeys)
    }

    public display(): void {
        super.display()
        console.log(`length is: ${this.length}`)
    }
    public makeSound(): void {
        console.log(`Making grand piano sound`)
    }

}