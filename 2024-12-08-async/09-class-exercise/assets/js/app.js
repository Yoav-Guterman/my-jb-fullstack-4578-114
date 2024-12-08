"use strict";

(() => {


    const getPower = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num % 3 === 0) reject('number is divider of 3')
                resolve(num ** 4)
            }, 2000)
        })
    }


    const button = document.getElementById('power')
    button.addEventListener('click', () => {
        const num = +prompt('please enter a number')
        getPower(num)
            .then(result => {
                console.log(`${num} ** 4 = ${result}`)
            })
            .catch(error => {
                console.log(error)
            })
    })

})()