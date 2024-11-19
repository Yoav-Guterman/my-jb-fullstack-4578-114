function power() {
    const inputNumber = document.getElementById('inputNumber')
    const powerNumber = inputNumber.value
    alert(`the power 3 of ${powerNumber} is: ${powerNumber ** 3}`)
    inputNumber.style.backgroundColor = 'black'
    if (inputNumber.style.backgroundColor === 'black') {
        inputNumber.style.color = 'white'
    }
}