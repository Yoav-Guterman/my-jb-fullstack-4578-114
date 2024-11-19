function emailCheck() {
    const email = document.getElementById('emailInput').value
    const emailErrorMessage = document.getElementById('emailErrorMessage')
    const emailInput = document.getElementById('emailInput')
    if (!email) {
        emailInput.style.backgroundColor = 'red'
        emailErrorMessage.innerHTML = 'You must enter an email'
    } else {
        alert(`your email is: ${email}`)
    }

}