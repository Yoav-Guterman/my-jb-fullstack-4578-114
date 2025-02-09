function Mammal(target: any): any {
    return class extends target {
        birthate: Date = new Date()
    }
}

class Animal {

}
@Mammal
class Lion extends Animal {
    weight: number;

    constructor(weight: number) {
        super()
        this.weight = weight
    }

    sayHello() {
        console.log('roaring.... hahahahahah')
    }
}

function Min(value: number) {
    return function (target: any) {

    }
}

const simba = new Lion(400)

console.log(`simba's weight is `)