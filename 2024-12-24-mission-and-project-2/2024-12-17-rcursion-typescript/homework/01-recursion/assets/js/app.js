"use strict";

(() => {
    // exercise 1
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const n = +prompt('enter a number')

    //     const printSmiley = n => {
    //         if (n <= 0) return;
    //         document.write(':) ')
    //         printSmiley(n - 1)
    //     }
    //     printSmiley(n)
    // })

    // exercise 2
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const n = +prompt('enter a number')

    //     const printSmiley = n => {
    //         if (n <= 0) return;
    //         document.write(`${n} `)
    //         printSmiley(n - 1)
    //     }
    //     printSmiley(n)
    // })

    // exercise 3
    // const is7BOOM = n => {
    //     if (n % 7 === 0 || n % 10 === 7) {
    //         return true
    //     }
    //     return false
    // }
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const n = +prompt('enter a number')

    //     const printSmiley = n => {
    //         if (n <= 0) return;
    //         document.write(is7BOOM(n) ? ` ${n}` : ``)
    //         printSmiley(n - 1)
    //     }
    //     printSmiley(n)
    // })

    // exercise 4
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const n = +prompt('enter a number')

    //     const printSmiley = n => {
    //         if (n <= 0) return 0;
    //         return n + printSmiley(n - 1)
    //     }
    //     document.write(printSmiley(n))
    // })

    // exercise 5
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const n = +prompt('enter a number')

    //     const printSmiley = n => {
    //         if (n <= 0) return 1;
    //         return n * printSmiley(n - 1)
    //     }
    //     document.write(printSmiley(n))
    // })

    // exercise 6
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const n = +prompt('enter a number')

    //     const printSmiley = n => {
    //         if (n <= 0) return;
    //         printSmiley(n - 1)
    //         document.write(`${n} `)
    //     }
    //     printSmiley(n)
    // })

    // exercise 7
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const arr = [10, 120, 30, 41, 51]

    //     const printSmiley = arr => {
    //         if (arr.length <= 0) return 0;
    //         return (arr[0] % 2 === 0 ? arr[0] : 0) + printSmiley(arr.splice(1))
    //     }
    //     document.write(printSmiley(arr))
    // })

    // exercise 8
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const arr = [1110, 120, 1130, 41, 51]

    //     const findMax = arr => {
    //         if (arr.length === 1) return arr[0];
    //         const maxOfRest = findMax(arr.splice(1))
    //         return (arr[0] > maxOfRest ? arr[0] : maxOfRest)
    //     }
    //     document.write(findMax(arr))
    // })

    // exercise 9
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const str = 'heh'

    //     const isPalindrome = (str, start = 0, end = str.length - 1) => {
    //         if (start >= end) return true
    //         if (str[start] !== str[end]) return false
    //         return isPalindrome(str, start + 1, end - 1)
    //     }
    //     document.write(isPalindrome(str))
    // })

    // exercise 10
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const arr = [10, 20, 30, 40, 50, 60]

    //     const isPalindrome = arr => {
    //         if (arr.length === 0) return true
    //         if (arr[0] % 2 !== 0) return false
    //         return isPalindrome(arr.splice(1))
    //     }
    //     document.write(isPalindrome(arr))
    // })

    // exercise 11
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const num = 123456789

    //     const sumOfDigits = num => {
    //         if (num === 0) return 0
    //         return num % 10 + sumOfDigits(Math.floor(num / 10))
    //     }
    //     document.write(sumOfDigits(num))
    // })

    // exercise 12
    // document.getElementById('btn1').addEventListener('click', () => {
    //     const num = 123456789

    //     const numberOfDigits = num => {
    //         if (num === 0) return 0
    //         return 1 + numberOfDigits(Math.floor(num / 10))
    //     }
    //     document.write(numberOfDigits(num))
    // })

    // exercise 13
    // const newObject = {
    //     name: 'yoav',
    //     age: 22,
    //     IQ: 50,
    //     hair: {
    //         color: 'black',
    //         length: 10,
    //         density: 'low',
    //         isBald: true
    //     },
    //     favoriteDrink: 'water'
    // }
    // document.getElementById('btn1').addEventListener('click', () => {

    //     const objectProperties = item => {
    //         for (const property in item) {
    //             if (typeof item[property] === 'object') {
    //                 objectProperties(item[property])
    //             } else {
    //                 document.write(`${property}: ${item[property]} <br>`)
    //             }
    //         }
    //     }
    //     objectProperties(newObject)
    // })

    // exercise 14 with extra [property] object instead of normal array
    // const customer = {
    //     firstName: "Moishe",
    //     lastName: "Ufnik",
    //     address: { city: "Tel Aviv", street: "Hertzel", num: 12 }
    // }

    // document.getElementById('btn1').addEventListener('click', () => {
    //     const extractValues = object => {
    //         const arr = []

    //         const objectProperties = item => {
    //             for (const property in item) {
    //                 if (typeof item[property] === 'object') {
    //                     objectProperties(item[property])
    //                 } else {
    //                     arr.push({
    //                         [property]: item[property]
    //                     })
    //                 }
    //             }
    //         }
    //         objectProperties(object)
    //         return arr
    //     }
    //     console.log(extractValues(customer))
    // })
})()