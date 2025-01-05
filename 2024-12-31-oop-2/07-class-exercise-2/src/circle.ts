import Shape from "./shape.js";

export default class Circle extends Shape {
    constructor(
        private radius: number,
    ) {
        super()
    }
    getArea(): number {
        return this.radius * 2 * 3.14
    }

}