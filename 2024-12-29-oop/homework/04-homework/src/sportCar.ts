import Car from "./car.js";

export default class SportCar extends Car {

    public constructor(
        serialNumber: string,
        manufacturer: string,
        model: string,
        color: string,
        EngineVolume: number,
        private readonly maxSpeed: number,
        private readonly numberOfRacesParticipated: number
    ) {
        super(serialNumber, manufacturer, model, color, EngineVolume)
    }

    public display() {
        super.display()
        console.log(`max speed: ${this.maxSpeed}`)
        console.log(`races participated: ${this.numberOfRacesParticipated}`)
    }
}