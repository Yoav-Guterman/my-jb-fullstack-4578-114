export default class speaker {
    public constructor(
        private readonly color: string,
        private readonly volume: number,
    ) {
    }

    public display() {
        console.log(`author: ${this.color}`)
        console.log(`bookName: ${this.volume}`)
    }


    public turnOn() {
        console.log('turning on...')
    }

    public turnOff() {
        console.log('turning off...')
    }

    public sound() {
        console.log('beep boop boop')
    }
}