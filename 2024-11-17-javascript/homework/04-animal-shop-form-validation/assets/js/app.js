function validateForm(event) {
    event.preventDefault()

    const firstNameInput = document.getElementById('firstName')
    const firstName = firstNameInput.value
    const familyNameInput = document.getElementById('familyName')
    const familyName = familyNameInput.value
    const messageInput = document.getElementById('message')
    const message = messageInput.value

    let isFirstName = false
    let isFamilyName = false
    let isMessage = false

    if (!firstName) {
        firstNameInput.style.backgroundColor = 'pink'
        alert('first name missing')
        isFirstName = false
    } else {
        firstNameInput.style.backgroundColor = 'white'
        isFirstName = true
    }

    if (!familyName) {
        familyNameInput.style.backgroundColor = 'pink'
        alert('family name missing')
        isFamilyName = false
    } else {
        familyNameInput.style.backgroundColor = 'white'
        isFamilyName = true
    }

    if (!message) {
        messageInput.style.backgroundColor = 'pink'
        alert('message missing')
        isMessage = false
    } else {
        messageInput.style.backgroundColor = 'white'
        isMessage = true
    }

    if (isFirstName && isFamilyName && isMessage) {
        document.getElementById('contactUsForm').submit()
    }
}
