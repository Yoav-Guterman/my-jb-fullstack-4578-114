// we develop apps that work with tangible objects, for example: car

const carMake = 'opel'
const carModel = 'corsa'
const carYear = 2012
const carPrice = 13000

function igniteCar() {
    console.log(`ignited... you can now drive you ${carMake}`)
}

// we don't want a collection of singular variables and functions
// we define cars as objects
// problem is: we don'w have any template of car 
const car = {
    make: 'opel',
    Model: 'corsa',
    Year: 2012,
    Price: 13000,
    igniteCar: (carMake: string) => {
        console.log(`ignited... you can now drive you ${carMake}`)
    }
}

const anotherCar = {
    make: 'BMW',
    Model: '535i',
    diesel: true,
    YearMade: 2012,
    Price: 13000,
    igniteCar: (carMake: string) => {
        console.log(`ignited... you can now drive you ${carMake}`)
    }
}

// typescript can help with types
type Car = {
    make: string,
    model: string,
    year: number,
    diesel: boolean,
    price: number,
    ignite: Function
}

const nissanMicra: Car = {
    make: 'nissan',
    model: 'micra',
    year: 2015,
    diesel: false,
    price: 12000,
    ignite: () => {
        console.log('igniting...')
    }
}

const nissanMaxima: Car = {
    make: 'nissan',
    model: 'maxima',
    year: 2012,
    diesel: true,
    price: 112000,
    ignite: () => {
        console.log('starting...')
    }
}