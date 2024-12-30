// exercise 1
"use strict";

(() => {

    // exercise 1
    // document.getElementById('b1').addEventListener('click', () => {
    //     const n = +prompt('please enter a number')

    //     const printStars = (n) => { // 1. function signature identical to non-recursive solution
    //         if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
    //         document.write(`${n} `)    // 3. do a single portion of the entire recursion work
    //         printStars(n - 1)         // 4. invoke the recursion with the rest of the work
    //     }
    //     printStars(n)
    // })

    // exercise 1
    // document.getElementById('b2').addEventListener('click', () => {
    //     const n = +prompt('please enter a number')

    //     const printStars = (n) => { // 1. function signature identical to non-recursive solution
    //         if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
    //         document.write(n % 2 === 0 ? `${n} ` : ``)    // 3. do a single portion of the entire recursion work
    //         printStars(n - 1)         // 4. invoke the recursion with the rest of the work
    //     }
    //     printStars(n)
    // })

    // exercise 3
    // document.getElementById('b2').addEventListener('click', () => {
    //     const n = +prompt('please enter a number')

    //     const printStars = (n) => {  
    //         if (n <= 0) return
    //         document.write(`${n} `) 

    //         printStars(n - 1)      
    //     }
    //     printStars(n)
    // })

    // exercise 4
    // document.getElementById('b4').addEventListener('click', () => {
    //     const n = +prompt('please enter a number')

    //     const printStars = (n) => {
    //         if (n <= 0) return 1
    //         return n * printStars(n - 1)
    //     }
    //     document.write(printStars(n))
    // })

    // exercise 5
    // document.getElementById('b4').addEventListener('click', () => {
    //     const n = +prompt('please enter a number')

    //     const printStars = (n) => {
    //         if (n <= 0) return 1
    //         return n * printStars(n - 1)
    //     }
    //     document.write(printStars(n))
    // })

    const userObject = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }


    document.getElementById('b5').addEventListener('click', () => {

        const printProperties = userObject => {
            for (const prop in userObject) {
                if (typeof userObject[prop] !== 'object') {
                    console.log(prop)
                }
                else printProperties(userObject[prop])

            }
        }
        printProperties(userObject)
    })

    //     const printStars = (n) => {
    //         if (n <= 0) return 1
    //         return n * printStars(n - 1)
    //     }
    //     document.write(printStars(n))
    // })




})()







// exercise 3

