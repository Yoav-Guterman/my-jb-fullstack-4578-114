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
        const promise = getPower(num)
        console.log(promise)
        setTimeout(() => {
            console.log(promise)
        }, 3000);

    })

})()