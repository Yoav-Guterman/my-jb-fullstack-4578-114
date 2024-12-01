function collectData() {
    const colorName = document.getElementById('colorName').value
    return colorName
}

function generateHTML(data) {
    const newHTML =
        `<tr>
        <td>${data}</td>
        <td style="background-color: ${data}"></td>
    </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const colors = document.getElementById('colors')
    colors.innerHTML += newHTML
}


function addColor(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    // saveSingleCarToStorage(data)
    renderHTML(newHTML)
    // clearForm()
}