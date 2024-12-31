import Car from "./car.js";
export default class SportCar extends Car {
    constructor(serialNumber, manufacturer, model, color, EngineVolume, maxSpeed, numberOfRacesParticipated) {
        super(serialNumber, manufacturer, model, color, EngineVolume);
        this.maxSpeed = maxSpeed;
        this.numberOfRacesParticipated = numberOfRacesParticipated;
    }
    display() {
        super.display();
        console.log(`max speed: ${this.maxSpeed}`);
        console.log(`races participated: ${this.numberOfRacesParticipated}`);
    }
}
