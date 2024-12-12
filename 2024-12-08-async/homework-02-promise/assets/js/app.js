// exercise 1
"use strict";

(() => {
    const generate7BoomAfterDelayAsync = (min, max) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * (max - min) + min)
                if (randomNumber % 7 === 0 || randomNumber % 10 === 7) {
                    resolve(randomNumber)
                } else {
                    reject(randomNumber)
                }
            }, 1000)
        })
    }

    document.getElementById('button').addEventListener('click', () => {
        const min = parseInt(document.getElementById('min').value)
        const max = parseInt(document.getElementById('max').value)

        generate7BoomAfterDelayAsync(min, max)
            .then(result => {
                console.log(`the number ${result} is OK`)
            })
            .catch(error => {
                console.log(`the number ${error} is BAD`)
            })
    })
})()


// exercise 2
// "use strict";

// (() => {
//     const isNumPrimitive = randomNumber => {
//         for (let i = 2; i < randomNumber; i++) {
//             if (randomNumber % i === 0) return false
//         }
//         return true
//     }

//     const generatePrimeNumberAfterDelayAsync = (min, max) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const randomNumber = Math.floor(Math.random() * (max - min) + min)
//                 isNumPrimitive(randomNumber) ? resolve(randomNumber) : reject(randomNumber)
//             }, 2000)

//         })
//     }

//     document.getElementById('button').addEventListener('click', () => {
//         const min = parseInt(document.getElementById('min').value)
//         const max = parseInt(document.getElementById('max').value)
//         generatePrimeNumberAfterDelayAsync(min, max)
//             .then(result => {
//                 console.log(`the number ${result} is primitive`)
//             })
//             .catch(error => {
//                 console.log(`the number ${error} is NOT primitive`)
//             })
//     })
// })()


// exercise 3
// "use strict";

// (() => {
//     const generateCuteAnimalAfterDelayAsync = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const cuteAnimals = ['kitten', 'dog', 'bunny', 'parrot', 'scorpion', 'spider', 'cockroach']
//                 const randomAnimalIndex = Math.floor(Math.random() * cuteAnimals.length)
//                 const randomAnimal = cuteAnimals[randomAnimalIndex]
//                 if (randomAnimal === 'kitten' || randomAnimal === 'dog' || randomAnimal === 'bunny' || randomAnimal === 'parrot') {
//                     resolve(randomAnimal)
//                 } else {
//                     reject(randomAnimal)
//                 }
//             }, 2000)
//         })
//     }

//     document.getElementById('button').addEventListener('click', () => {
//         generateCuteAnimalAfterDelayAsync()
//             .then(result => {
//                 console.log(`your animal is: ${result}, Cute Animal!`)
//             })
//             .catch(error => {
//                 console.log(`your animal is ${error}. ugly animal!`)
//             })
//     })

// })()


// exercise 4
// "use strict";

// (() => {

//     const getRandomDay = () => {
//         const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
//         const randomDayIndex = parseInt(Math.random() * days.length)
//         return days[randomDayIndex]
//     }
//     const generateWorkingDayAfterDelayAsync = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const day = getRandomDay()
//                 if (day === 'friday' || day === 'saturday') {
//                     reject(day)
//                 } else {
//                     resolve(day)
//                 }
//             }, 1000)
//         })
//     }
//     document.getElementById('button').addEventListener('click', () => {
//         generateWorkingDayAfterDelayAsync()
//             .then(day => {
//                 console.log(`${day} is working day!`)
//             })
//             .catch(error =>
//                 console.log(`${error} is not a working day`)
//             )
//     })

// })()
// exercise 5

// "use strict";

// (() => {
//     const getArrayFromServerAsync = size => {

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const randomNumber = getRandomNumber()
//                 if (randomNumber % 2 === 0) {
//                     const newArray = []
//                     for (let i = 0; i < size; i++) {
//                         newArray.push(getRandomNumber())
//                     }
//                     resolve(newArray)
//                 } else {
//                     reject(`couldn't find the array`)
//                 }
//             }, 1000)
//         })
//     }

//     const getRandomNumber = () => parseInt(Math.random() * 100)

//     document.getElementById('button').addEventListener('click', () => {
//         const size = +prompt('please enter size number for the array')
//         getArrayFromServerAsync(size)
//             .then(result => {
//                 console.log(`array successfully created ${result}`)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     })
// })()

// exercise 7

// "use strict";

// (() => {
//     const addCharToPassword = () => {
//         const charPool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//         return charPool[parseInt(Math.random() * charPool.length)]
//     }

//     const checkPassword = password => {
//         const hasCapital = /[A-Z]/.test(password);      // Checks for at least one uppercase letter
//         const hasLowercase = /[a-z]/.test(password);   // Checks for at least one lowercase letter
//         const hasNumber = /[0-9]/.test(password);      // Checks for at least one digit

//         return hasCapital && hasLowercase && hasNumber;
//     }

//     const generateStrongPasswordAsync = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let password = ''
//                 for (let i = 0; i < 6; i++) {
//                     password += addCharToPassword()
//                 }
//                 if (checkPassword(password)) {
//                     return resolve(password)
//                 }
//                 return reject(password)
//             }, 1000)
//         })
//     }

//     document.getElementById('button').addEventListener('click', () => {
//         generateStrongPasswordAsync()
//             .then(result => {
//                 console.log(`password: ${result} is GOOD!`)
//             })
//             .catch(error => {
//                 console.log(`password ${error} is BAD!`)
//             })
//     })
// })()