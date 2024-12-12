"use strict";

(async () => {


    const getPower = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num % 3 === 0) reject('number is divider of 3')
                resolve(num ** 2
            )
            }, 2000)
        })
    }


    const button = document.getElementById('power')
    button.addEventListener('click', async () => {
        try {
            const result = await getPower(num)
            console.log(`${num} ** 2 = ${result}`)
        } catch (e) {
            console.log(e)
        }

    })

})()

// let sum = 0;
// for (const dayNumber of [1, 2, 3, 4, 5, 6, 7, 8]) {
//     const result = await getNumberOfCandles(dayNumber)
//     sum += result;
// }
// console.log(sum)
// const promises = [1, 2, 3, 4, 5, 6, 7, 8].map(dayNumber => getNumberOfCandles(dayNumber))
// const result = await Promise.all(promises)
// const candlesInHanukah = result.reduce((cumulative, current) => cumulative + current, 0)
// console.log(candlesInHanukah)