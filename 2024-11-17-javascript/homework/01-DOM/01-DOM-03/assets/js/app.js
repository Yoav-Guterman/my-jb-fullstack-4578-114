function checkEmail() {
    const email = document.getElementById("emailInput").value
    alert(!email ? `you didn't enter any email` : `your email is: ${email}`)
}