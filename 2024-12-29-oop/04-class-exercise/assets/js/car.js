class Mobile {
    // methods
    constructor(type, screenSize, price, numberOfCameras) {
        this.type = type;
        this.screenSize = screenSize;
        this.price = price;
        this.numberOfCameras = numberOfCameras;
        // data members
        this.pinCode = Math.floor(Math.random() * (9999 - 1000) + 1000);
        Mobile.totalMobilesCreated++;
    }
    phoneCounter() {
        console.log(`total mobiles created: ${Mobile.totalMobilesCreated}`);
    }
    displaySaleInfo() {
        console.log(`${this.type} with a screen size of: ${this.screenSize} with ${this.numberOfCameras} cameras is for sale for ${this.price} `);
    }
    displayPinCode() {
        console.log(this.pinCode);
    }
    turnOn() {
        console.log(`turn on the device: ${this.type}`);
    }
    turnOff() {
        console.log(`turn off the device: ${this.type}`);
    }
    takePicture() {
        console.log(`take picture from one of the ${this.numberOfCameras} cameras`);
    }
}
Mobile.totalMobilesCreated = 0;
export default Mobile;
