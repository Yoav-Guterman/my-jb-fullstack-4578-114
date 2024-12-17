"use strict";

(() => {
    const paragraphs = document.getElementsByTagName('p')

    const randomColor = () => {
        const colors = ['green', 'yellow', 'red', 'blue', 'purple', 'cyan']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    for (const paragraph of paragraphs) {
        paragraph.addEventListener('click', function () {
            setTimeout(() => {
                this.style.backgroundColor = randomColor()
            }, 1000);
        })
    }
})()


