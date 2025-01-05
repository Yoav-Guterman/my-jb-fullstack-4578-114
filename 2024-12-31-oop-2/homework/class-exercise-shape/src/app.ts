import Circle from "./circle.js"
import Rectangle from "./rectangle.js"
import Shape from "./shape.js"
import Square from "./square.js"

const shapeNumber: number = +prompt('please enter a number between 1-3')

function getShape(shapeNumber: number): Shape {
    switch (shapeNumber) {
        case 1:
            return new Circle(10)
        case 2:
            return new Square(10)
        case 3:
            return new Rectangle(10, 20)
    }

}

const shape: Shape = getShape(shapeNumber)
console.log(`area of shape is ${shape.getArea()}`)