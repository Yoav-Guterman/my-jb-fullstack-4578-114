"use strict";

(async () => {


    const getNumberOfCandles = (dayNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dayNumber < 1) return reject('dayNumber must be greater than 0');
                if (dayNumber > 8) return reject('no Isru Chag in Hanukah');
                resolve(dayNumber + 1)
            }, 100)
        })
    }

    try {


        // let sum = 0;
        // for (const dayNumber of [1, 2, 3, 4, 5, 6, 7, 8]) {
        //     const result = await getNumberOfCandles(dayNumber)
        //     sum += result;
        // }
        // console.log(sum)
        const promises = [1, 2, 3, 4, 5, 6, 7, 8].map(dayNumber => getNumberOfCandles(dayNumber))
        const result = await Promise.all(promises)
        const candlesInHanukah = result.reduce((cumulative, current) => cumulative + current, 0)
        console.log(candlesInHanukah)

    } catch (e) {
        console.log(e)
    }

})()