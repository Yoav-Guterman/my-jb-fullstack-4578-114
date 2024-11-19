function validate() {
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const ageInput = document.getElementById("age")

    const email = emailInput.value
    const password = passwordInput.value
    const age = ageInput.value

    if (!email) alert("please insert email")

    if (!password) alert("please insert password")

    if (!age) alert("please insert age")
} 