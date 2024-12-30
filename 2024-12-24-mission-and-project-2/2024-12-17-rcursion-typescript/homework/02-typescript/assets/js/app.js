document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data);
    renderHTML(newHTML);
});
function collectData() {
    const firstNameInput = document.getElementById('firstName');
    const firstName = firstNameInput.value;
    const familyNameInput = document.getElementById('familyName');
    const familyName = familyNameInput.value;
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberInput.value;
    const ageInput = document.getElementById('age');
    const age = Number(ageInput.value);
    return {
        firstName,
        familyName,
        email,
        phoneNumber,
        age
    };
}
function generateHTML(data) {
    const newHTML = `
    first name is: ${data.firstName}<br>
    family name is: ${data.familyName}<br>
    email is: ${data.email}<br>
    phoneNumber is: ${data.phoneNumber}<br>
    age is: ${data.age}<br>
    `;
    return newHTML;
}
function renderHTML(newHTML) {
    const dataSpan = document.getElementById('dataInfo');
    dataSpan.innerHTML = newHTML;
}
