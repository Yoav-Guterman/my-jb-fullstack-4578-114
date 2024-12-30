document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const data: Object = collectData()
    const newHTML: string = generateHTML(data)
    renderHTML(newHTML)
})

function collectData(): Object {
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement
    const firstName: string = firstNameInput.value
    const familyNameInput = document.getElementById('familyName') as HTMLInputElement
    const familyName: string = familyNameInput.value
    const emailInput = document.getElementById('email') as HTMLInputElement
    const email: string = emailInput.value
    const phoneNumberInput = document.getElementById('phoneNumber') as HTMLInputElement
    const phoneNumber: string = phoneNumberInput.value
    const ageInput = document.getElementById('age') as HTMLInputElement
    const age: number = Number(ageInput.value)
    return {
        firstName,
        familyName,
        email,
        phoneNumber,
        age
    }
}

function generateHTML(data): string {
    const newHTML: string = `
    first name is: ${data.firstName}<br>
    family name is: ${data.familyName}<br>
    email is: ${data.email}<br>
    phoneNumber is: ${data.phoneNumber}<br>
    age is: ${data.age}<br>
    `
    return newHTML
}

function renderHTML(newHTML: string) {
    const dataSpan = document.getElementById('dataInfo');
    dataSpan.innerHTML = newHTML
}