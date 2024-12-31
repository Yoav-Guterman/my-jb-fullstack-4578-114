export default class Flashlight {
    public constructor(
        private readonly color: string,
        private readonly length: string,
        private readonly lightPower: number,
        private readonly numberOfBatteries: number
    ) {
    }

    public display() {
        console.log(`color: ${this.color}`)
        console.log(`length: ${this.length}`)
        console.log(`lightPower: ${this.lightPower}`)
        console.log(`numberOfBatteries: ${this.numberOfBatteries}`)
    }

    public turnOn() {
        console.log('turning on...')
    }

    public turnOff() {
        console.log('turning off...')
    }

    public replaceBatteries() {
        console.log('changing batteries...')
    }
}