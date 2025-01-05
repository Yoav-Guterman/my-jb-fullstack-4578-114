import MusicShop from "./musicShop.js";

export default class Guitar extends MusicShop {
    constructor(
        model: string,
        maker: string,
        color: string,
        private numberOfStrings: number
    ) {
        super(model, maker, color)
    }

    public display(): void {
        console.log(`model is: ${this.model}`)
        console.log(`model is: ${this.maker}`)
        console.log(`model is: ${this.color}`)
        console.log(`model is: ${this.numberOfStrings}`)
    }
    public makeSound(): void {
        console.log(`Making Guitar sound`)
    }

    public test(): void {
        console.log('testing the guitar')
    }
    public tune(): void {
        console.log('tuning the guitar')
    }
}