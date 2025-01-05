import Tester from "./tester.js";

export default abstract class MusicShop implements Tester {
    public constructor(
        public model: string,
        public maker: string,
        public color: string
    ) { }
    public abstract test(): void

    public abstract tune(): void

    public abstract display(): void

    public abstract makeSound(): void

}