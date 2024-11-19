function changeColor() {
    const inputBackgroundColor = document.getElementById('changeColorInput')
    randomNumber = parseInt((Math.random() * 6) + 1)
    switch (randomNumber) {
        case 1:
            inputBackgroundColor.style.backgroundColor = 'red'
            break;
        case 2:
            inputBackgroundColor.style.backgroundColor = 'green'
            break;
        case 3:
            inputBackgroundColor.style.backgroundColor = 'blue'
            break;
        case 4:
            inputBackgroundColor.style.backgroundColor = 'yellow'
            break;
        case 5:
            inputBackgroundColor.style.backgroundColor = 'white'
            break;
        case 6:
            inputBackgroundColor.style.backgroundColor = 'purple'
            break;
    }
}