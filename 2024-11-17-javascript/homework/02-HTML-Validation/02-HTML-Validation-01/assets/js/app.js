function validate() {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const phoneNumber = document.getElementById('phoneNumber').value
    const message = document.getElementById('message').value
    alert(`Hello, ${firstName} ${lastName}!\nyour email: ${email}\nyour phone number: ${phoneNumber}\nyour message: ${message}`)
}