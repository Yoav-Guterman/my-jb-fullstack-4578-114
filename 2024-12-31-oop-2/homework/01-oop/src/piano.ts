import MusicShop from "./musicShop.js";

export default class Piano extends MusicShop {

    constructor(
        model: string,
        maker: string,
        color: string,
        public numberOfKeys: number
    ) {
        super(model, maker, color)
    }

    public display(): void {
        console.log(`model is: ${this.model}`)
        console.log(`maker is: ${this.maker}`)
        console.log(`color is: ${this.color}`)
        console.log(`numberOfKeys is: ${this.numberOfKeys}`)
    }
    public makeSound(): void {
        console.log(`Making piano sound`)
    }

    public test(): void {
        console.log('testing the piano')
    }
    public tune(): void {
        console.log('tuning the piano')
    }

}