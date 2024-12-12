// exercise 1
// "use strict";

// (() => {
//     const showTime = () => {
//         console.log('start')
//         console.log(new Date());
//         console.log('end')
//     }

//     showTime()

// })()

// exercise 2
// "use strict";

// (() => {
//     const showTime = () => {

//         console.log('start')
//         setTimeout(() => {
//             console.log(new Date())
//         }, 3000)
//         console.log('end')
//     }

//     showTime()

// })()

// exercise 3
// "use strict";

// (() => {
//     const showTime = () => {
//         const timeAndDate = new Date()
//         console.log('start')
//         setTimeout(() => {
//             console.log(`time 3 seconds ago was: ${timeAndDate}`)
//         }, 3000)
//         console.log('end')
//     }

//     showTime()

// })()

// exercise 4
// "use strict";

// (() => {
//     const showTime = () => {
//         const timeAndDate = new Date()
//         console.log('start')
//         setTimeout(() => {
//             console.log(randomNumber())
//         }, 3000)
//         setTimeout(() => {
//             console.log(randomNumber())
//         }, 5000)
//         setTimeout(() => {
//             console.log(randomNumber())
//         }, 7000)
//         console.log('end')
//     }

//     const randomNumber = () => parseInt(Math.random() * 101)
//     showTime()

// })()

//exercise 5
// "use strict";

// (() => {
//     const showNumber = () => {
//         let showRandomNumber = document.getElementById('showRandomNumber')
//         setInterval(() => {
//             const maxRandom = document.getElementById('inputNumber').value
//             const currentRandomNumber = randomNumber(maxRandom, 0)
//             showRandomNumber.innerHTML = currentRandomNumber
//         }, 1000)
//     }
//     const randomNumber = (max, min) => parseInt(Math.random() * (max - min) + min)
//     showNumber()
// })()

//exercise 6
// "use strict";

// (() => {
//     const showColor = () => {
//         let colorArray = ['red', 'green', 'yellow', 'blue', 'wheat']
//         setInterval(() => {
//             const currentRandomNumber = randomNumber(colorArray.length, 0)
//             document.body.style.backgroundColor = colorArray[currentRandomNumber]
//         }, 1000)
//     }
//     const randomNumber = (max, min) => parseInt(Math.random() * (max - min) + min)
//     showColor()
// })()

//exercise 7
// "use strict";

// (() => {
//     const button = document.getElementById('button')
//     button.addEventListener('click', (() => {
//         document.body.style.backgroundColor = "Green";
//         setTimeout(() => {
//             alert("Done");
//         }, 0)
//     }))
// })()

//exercise 8
// "use strict";

// (() => {
//     const getRandomNumberAfterDelay = (callback) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 101)
//             callback(randomNumber)
//         }, 3000)
//     }

//     document.getElementById('button').addEventListener('click', (() => {
//         const randomNumberDiv = document.getElementById('showRandomNumber')
//         randomNumberDiv.innerHTML = 'wait for 3 seconds...'
//         getRandomNumberAfterDelay((randomNumber => {
//             randomNumberDiv.innerHTML = `Random number: ${randomNumber}`
//         }))
//     }))
// })()

//exercise 9
// "use strict";

// (() => {
//     const getRandomNumberAfterDelay = (callback, limit) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * limit)
//             callback(randomNumber)
//         }, 3000)
//     }

//     document.getElementById('button').addEventListener('click', (() => {
//         const randomNumberDiv = document.getElementById('showRandomNumber')
//         randomNumberDiv.innerHTML = 'wait for 3 seconds...'
//         const limit = 10
//         getRandomNumberAfterDelay((randomNumber => {
//             randomNumberDiv.innerHTML = `Random number: ${randomNumber}`
//         }), limit)
//     }))
// })()

//exercise 10
// "use strict";

// (() => {
//     const getRandomNumberAfterDelay = (callback, limit, first) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * (limit - first) + first)
//             callback(randomNumber)
//         }, 3000)
//     }

//     document.getElementById('button').addEventListener('click', (() => {
//         const randomNumberDiv = document.getElementById('showRandomNumber')
//         randomNumberDiv.innerHTML = 'wait for 3 seconds...'
//         const limit = 10
//         const first = 3
//         getRandomNumberAfterDelay((randomNumber => {
//             randomNumberDiv.innerHTML = `Random number: ${randomNumber}`
//         }), limit, first)
//     }))
// })()

//exercise 11
// "use strict";

// (() => {
//     const getEvenRandomNumberAfterDelay = (callback, limit, first) => {
//         setTimeout(() => {
//             let randomNumber = Math.floor(Math.random() * (limit - first) + first)
//             randomNumber = randomNumber % 2 === 0 ? randomNumber : randomNumber + 1
//             randomNumber = randomNumber <= limit ? randomNumber : randomNumber - 2
//             callback(randomNumber)
//         }, 3000)
//     }

//     document.getElementById('button').addEventListener('click', (() => {
//         const randomNumberDiv = document.getElementById('showRandomNumber')
//         randomNumberDiv.innerHTML = 'wait for 3 seconds...'
//         const limit = 10
//         const first = 3
//         getEvenRandomNumberAfterDelay((randomNumber => {
//             randomNumberDiv.innerHTML = `Random number: ${randomNumber}`
//         }), limit, first)
//     }))
// })()

//exercise 12
// "use strict";

// (() => {
//     function getUserFromServer() {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 // Demo for getting user from the server:
//                 const user = { firstName: "Moishe", lastName: "Ufnik" }
//                 // "Return" that user to the calling code.
//                 resolve(user)
//             }, 4000);
//         })
//     }

//     getUserFromServer().then((user => {
//         console.log("user from the server:", user)
//     }))

// })()

//exercise 13
// "use strict";

// (() => {
//     function getGradesFromServer() {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 // Demo for getting grades from the server:
//                 const grades = [100, 98, 75, 80, 100, 87];
//                 // "Return" that array to the calling code.
//                 resolve(grades)
//             }, 3000);
//         })
//     }

//     getGradesFromServer().then((grades => {
//         console.log("user from the server:", grades)
//     }))

// })()

//exercise 14
// "use strict";

// (() => {
//     const button = document.getElementById('button')
//     const locationSpan = document.getElementById('locationSpan')

//     button.addEventListener('click', (() => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 locationSpan.innerHTML = `latitude: ${latitude} longitude ${longitude}`
//             },
//             (error) => {
//                 locationSpan.innerHTML = `error: ${error.message}`
//             })
//     }))
// })()

//exercise 15
// "use strict";

// (() => {
//     const showTimeAndRandomColor = () => {
//         const span = document.getElementById('spanTime')
//         setInterval(() => {
//             span.innerHTML = getTime()
//             span.style.color = changeColorTime()
//         }, 1000)

//         const getTime = () => {
//             const now = new Date();
//             const hours = now.getHours(); // Returns the hour (0–23)
//             const minutes = now.getMinutes(); // Returns the minutes (0–59)
//             const seconds = now.getSeconds(); // Returns the seconds (0–59)
//             return `${hours}:${minutes}:${seconds}`
//         }

//         const changeColorTime = () => {
//             const colorArray = ['green', 'red', 'blue', 'yellow', 'cyan']
//             return colorArray[randomNumber(colorArray)]
//         }

//         const randomNumber = colorArray => Math.floor(Math.random() * colorArray.length)
//     }
//     showTimeAndRandomColor()
// })()