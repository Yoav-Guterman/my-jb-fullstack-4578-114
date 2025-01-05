import MusicShop from "./musicShop.js";

export default class Drum extends MusicShop {

    constructor(
        model: string,
        maker: string,
        color: string,
        private diameter: number
    ) {
        super(model, maker, color)
    }

    public display(): void {
        console.log(`model is: ${this.model}`)
        console.log(`model is: ${this.maker}`)
        console.log(`model is: ${this.color}`)
        console.log(`model is: ${this.diameter}`)
    }
    public makeSound(): void {
        console.log(`Making drum sound`)
    }

    public test(): void {
        console.log('testing the drums')
    }
    public tune(): void {
        console.log('tuning the drums')
    }

}