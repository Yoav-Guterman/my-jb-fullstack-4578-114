"use strict";

(() => {
    const button = document.getElementById('randomColor')
    button.addEventListener('click', (() => {

    }))
    const getRandomColorAfterDelay = () => {
        setTimeout(() => {
            const colorArray = ['red', 'green', 'yellow', 'blue', 'wheat']
            const randomNumber = Math.floor(Math.random() * colorArray.length)
            document.body.style.backgroundColor = colorArray[randomNumber]
        }, 3000);
    }

})()


