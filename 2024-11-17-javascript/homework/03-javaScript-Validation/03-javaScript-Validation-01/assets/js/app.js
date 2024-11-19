function alertName() {
    const firstName = document.getElementById('firstNameInput').value
    alert(!firstName ? `you didnt enter first name` : `Hello ${firstName}!`)
}