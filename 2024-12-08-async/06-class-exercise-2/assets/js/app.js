"use strict";

(() => {

    const getPower = (number, successCallback, errorCallback) => {
        setTimeout(() => {
            if (number % 3 === 0) {
                errorCallback('number is a divider of 3')
            } else {
                successCallback(number ** 2)
            }
        }, 3000)
    }


    document.getElementById('power').addEventListener('click', () => {
        const num = +prompt('enter a number')
        getPower(
            num,
            result => {
                console.log(`${num} ** 2 = ${result}`)
            },
            error => {
                console.log(error)
            }
        )

    })

})()