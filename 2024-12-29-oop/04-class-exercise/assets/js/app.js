// this is a litteral object
// const car = {
//     make: 'nissan',
//     model: 'Mirca'
// }
import Mobile from "./car.js";
const samsung = new Mobile('samsung', '6 inch', 1000, 4);
samsung.phoneCounter();
// console.log(samsung)
// samsung.turnOff()
// samsung.displaySaleInfo()
// samsung.displayPinCode()
const iphone = new Mobile('iphone', '5 inch', 2000, 3);
samsung.phoneCounter();
// iphone.type = 'iphone',
//     iphone.screenSize = '5 inch',
//     iphone.price = 2000,
//     iphone.numberOfCameras = 3
console.log(iphone);
iphone.turnOff();
