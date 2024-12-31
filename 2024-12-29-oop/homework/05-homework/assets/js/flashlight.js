export default class Flashlight {
    constructor(color, length, lightPower, numberOfBatteries) {
        this.color = color;
        this.length = length;
        this.lightPower = lightPower;
        this.numberOfBatteries = numberOfBatteries;
    }
    display() {
        console.log(`color: ${this.color}`);
        console.log(`length: ${this.length}`);
        console.log(`lightPower: ${this.lightPower}`);
        console.log(`numberOfBatteries: ${this.numberOfBatteries}`);
    }
    turnOn() {
        console.log('turning on...');
    }
    turnOff() {
        console.log('turning off...');
    }
    replaceBatteries() {
        console.log('changing batteries...');
    }
}
