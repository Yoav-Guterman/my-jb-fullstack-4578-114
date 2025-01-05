import Shape from "./shape.js";

export default class Rectangle extends Shape {
    constructor(
        private height: number,
        private width: number
    ) {
        super()
    }
    getArea(): number {
        return this.height * this.width
    }
}