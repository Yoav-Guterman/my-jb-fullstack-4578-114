function showFullName() {
    firstName = document.getElementById('firstNameInput').value
    lastName = document.getElementById('lastNameInput').value
    if (!firstName) {
        alert('first name missing!')
    } else if (!lastName) {
        alert('last name missing!')
    } else alert(`Hello, ${firstName} ${lastName}!`)



}