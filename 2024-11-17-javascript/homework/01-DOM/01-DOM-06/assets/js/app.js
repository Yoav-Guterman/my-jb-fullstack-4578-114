function onEnterBox(button) {
    const currentButton = document.getElementById(button)
    currentButton.style.backgroundColor = 'red'
    currentButton.style.color = 'blue'
}


function onLeaveBox(button) {
    const currentButton = document.getElementById(button)
    currentButton.style.backgroundColor = 'green'
    currentButton.style.color = 'white'
}