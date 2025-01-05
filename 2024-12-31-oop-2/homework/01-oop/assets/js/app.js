import Drum from "./drum.js";
import GrandPiano from "./grandPiano.js";
import Guitar from "./guitar.js";
import Piano from "./piano.js";
function getInstrument(Instrument) {
    switch (Instrument) {
        case 'drum':
            return new Drum('ax-cool-drum', 'drumCompany', 'white', 30);
        case 'guitar':
            return new Guitar('wild Guitar', 'guitarCompany', 'blue', 6);
        case 'piano':
            return new Piano('coolPiano', 'yamaha', 'black', 72);
        case 'grandPiano':
            return new GrandPiano('coolGrandPiano', 'yamaha-grand', 'white-black', 94, 100);
    }
}
const drum = getInstrument('drum');
drum.display();
drum.makeSound();
drum.test();
drum.tune();
const guitar = getInstrument('guitar');
guitar.display();
guitar.makeSound();
const piano = getInstrument('piano');
piano.display();
piano.makeSound();
const grandPiano = getInstrument('grandPiano');
grandPiano.display();
grandPiano.makeSound();
grandPiano.test();
grandPiano.tune();
// const drum = new Drum('ax-cool-drum', 'drumCompany', 'white', 30)
// drum.display()
// drum.makeSound()
// const guitar = new Guitar('wild Guitar', 'guitarCompany', 'blue', 6)
// guitar.display()
// guitar.makeSound()
// const piano = new Piano('coolPiano', 'yamaha', 'black', 72)
// piano.display()
// piano.makeSound()
// const grandPiano = new GrandPiano('coolGrandPiano', 'yamaha-grand', 'white-black', 94, 100)
// grandPiano.display()
// grandPiano.makeSound()
