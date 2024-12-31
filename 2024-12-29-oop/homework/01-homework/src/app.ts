import Book from "./book.js";

const lazyInvestor = new Book('lazy Invstor', 'Tamir Mandovsky', 'keter', 30)

lazyInvestor.display()
console.log(lazyInvestor.vat())

const lordOfTheRings = new Book('lord of the rings', 'kanye west', 'niv', 200)

lordOfTheRings.display()
console.log(lordOfTheRings.vat())

const atomicHabits = new Book('Atomic habits', 'James clear', 'kineret', 100)

atomicHabits.display()
console.log(atomicHabits.vat())