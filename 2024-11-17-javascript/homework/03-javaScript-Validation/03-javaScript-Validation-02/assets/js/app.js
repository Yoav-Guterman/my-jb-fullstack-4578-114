function alertForm() {
    const firstNameInput = document.getElementById('firstName')
    const firstName = firstNameInput.value
    const lastNameInput = document.getElementById('lastName')
    const lastName = lastNameInput.value
    const emailInput = document.getElementById('email')
    const email = emailInput.value

    const errorFirstName = document.getElementById('errorFirstName')
    const errorLastName = document.getElementById('errorLastName')
    const errorEmail = document.getElementById('errorEmail')

    let isFirstName = false
    let isLastName = false
    let isEmail = false

    // check first name
    if (!firstName) {
        firstNameInput.style.backgroundColor = 'pink'
        errorFirstName.innerHTML = `please enter first name`
        isFirstName = false
    } else if (firstName.length < 2) {
        firstNameInput.style.backgroundColor = 'pink'
        errorFirstName.innerHTML = `please enter at least 2 chars`
        isFirstName = false
    } else if (firstName.length > 30) {
        firstNameInput.style.backgroundColor = 'pink'
        errorFirstName.innerHTML = `please enter less than 30 chars`
        isFirstName = false
    } else {
        firstNameInput.style.backgroundColor = 'white'
        errorFirstName.innerHTML = ``
        isFirstName = true
    }

    // check last name
    if (!lastName) {
        lastNameInput.style.backgroundColor = 'pink'
        errorLastName.innerHTML = `please enter last name`
        isLastName = false
    } else if (lastName.length < 2) {
        lastNameInput.style.backgroundColor = 'pink'
        errorLastName.innerHTML = `please enter at least 2 chars`
        isLastName = false
    } else if (lastName.length > 30) {
        lastNameInput.style.backgroundColor = 'pink'
        errorLastName.innerHTML = `please enter less than 30 chars`
        isLastName = false
    } else {
        lastNameInput.style.backgroundColor = 'white'
        errorLastName.innerHTML = ``
        isLastName = true
    }

    // check email
    if (!email) {
        emailInput.style.backgroundColor = 'pink'
        errorEmail.innerHTML = `please enter last name`
        isEmail = false
    } else if (email.length < 2) {
        emailInput.style.backgroundColor = 'pink'
        errorEmail.innerHTML = `please enter at least 2 chars`
        isEmail = false
    } else if (email.length > 30) {
        emailInput.style.backgroundColor = 'pink'
        errorEmail.innerHTML = `please enter less than 30 chars`
        isEmail = false
    } else {
        emailInput.style.backgroundColor = 'white'
        errorEmail.innerHTML = ``
        isEmail = true
    }

    if (isEmail && isLastName && isFirstName) alert(`Hello ${firstName} ${lastName}\nmail: ${email}`)

}

// how to make a functions out of this?