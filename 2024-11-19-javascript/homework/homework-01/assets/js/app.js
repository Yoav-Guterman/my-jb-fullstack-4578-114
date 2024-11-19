function errorMessage(inputID, spanID, innerHtmlMessage, backgroundColor) {
    const fieldInput = document.getElementById(inputID);
    const errorSpan = document.getElementById(spanID);

    fieldInput.style.backgroundColor = backgroundColor;
    errorSpan.innerHTML = innerHtmlMessage;
}

function collectData() {
    const ingredientInput = document.getElementById('ingredient')
    const ingredient = ingredientInput.value
    const amountInput = document.getElementById('amount')
    const amount = amountInput.value

    let isIngredient = false
    let isAmount = false

    if (!ingredient) {
        errorMessage('ingredient', 'ingredientErrorMessage', 'please enter ingredient', 'pink')
        isIngredient = false
    } else {
        errorMessage('ingredient', 'ingredientErrorMessage', '', 'white')
        isIngredient = true
    }

    if (!amount) {
        errorMessage('amount', 'amountErrorMessage', 'please enter amount', 'pink')
        isAmount = false
    } else if (amount < 2) {
        errorMessage('amount', 'amountErrorMessage', 'amount must be larger than 2', 'pink')
        isAmount = false
    } else {
        errorMessage('amount', 'amountErrorMessage', '', 'white')
        isAmount = true
    }

    if (isIngredient && isAmount) {
        return {
            ingredient: ingredient,
            amount: amount
        }
    } else {
        return null
    }

}

function generateHTML(data) {
    if (!data) return ''
    const newHTML = `<li>Ingredient: ${data.ingredient}, Amount: ${data.amount}</li>`
    return newHTML
}

function renderHTML(newHTML) {
    const IngredientList = document.getElementById("cakeIngredients")
    IngredientList.innerHTML += newHTML
}

function clearForm() {
    const cakeForm = document.getElementById('cakeForm')
    cakeForm.reset()

    const ingredientInput = document.getElementById('ingredient')
    ingredientInput.focus()
}

function addIngredient(event) {
    event.preventDefault()
    const data = collectData() // collect data and save
    const newHTML = generateHTML(data) //save data in the format
    renderHTML(newHTML) //use data
    clearForm()
}