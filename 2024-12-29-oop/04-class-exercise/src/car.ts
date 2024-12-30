export default class Mobile {

    // data members
    private pinCode: number = Math.floor(Math.random() * (9999 - 1000) + 1000)
    private static totalMobilesCreated = 0

    // methods
    public constructor(
        private type: string,
        private screenSize: string,
        private price: number,
        private numberOfCameras: number
    ) {
        Mobile.totalMobilesCreated++
    }

    public phoneCounter() {
        console.log(`total mobiles created: ${Mobile.totalMobilesCreated}`)
    }

    public displaySaleInfo() {
        console.log(`${this.type} with a screen size of: ${this.screenSize} with ${this.numberOfCameras} cameras is for sale for ${this.price} `)
    }

    public displayPinCode() {
        console.log(this.pinCode)
    }

    turnOn() {
        console.log(`turn on the device: ${this.type}`)
    }

    turnOff() {
        console.log(`turn off the device: ${this.type}`)
    }

    takePicture() {
        console.log(`take picture from one of the ${this.numberOfCameras} cameras`)
    }
}

