export default class car {
    constructor(serialNumber, manufacturer, model, color, EngineVolume) {
        this.serialNumber = serialNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.EngineVolume = EngineVolume;
    }
    display() {
        console.log(`serialNumber: ${this.serialNumber}`);
        console.log(`manufacturer: ${this.manufacturer}`);
        console.log(`model: ${this.model}`);
        console.log(`color: ${this.color}`);
        console.log(`EngineVolume: ${this.EngineVolume}`);
    }
}
