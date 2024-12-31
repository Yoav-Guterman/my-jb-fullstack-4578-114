export default class car {
    public constructor(
        private readonly serialNumber: string,
        private readonly manufacturer: string,
        private readonly model: string,
        private readonly color: string,
        private readonly EngineVolume: number
    ) {
    }

    public display() {
        console.log(`serialNumber: ${this.serialNumber}`)
        console.log(`manufacturer: ${this.manufacturer}`)
        console.log(`model: ${this.model}`)
        console.log(`color: ${this.color}`)
        console.log(`EngineVolume: ${this.EngineVolume}`)
    }
}