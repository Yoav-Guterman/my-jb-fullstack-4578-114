import Flashlight from "./flashlight.js";
const jbl = new Flashlight('blue', '10 inch', 5, 2);
jbl.display();
jbl.replaceBatteries();
jbl.turnOff();
jbl.turnOn();
const flashlight = new Flashlight('black', '10 inch', 3, 1);
flashlight.display();
flashlight.replaceBatteries();
flashlight.turnOff();
flashlight.turnOn();
