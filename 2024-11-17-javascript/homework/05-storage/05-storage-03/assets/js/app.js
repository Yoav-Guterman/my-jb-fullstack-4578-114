function collectData() {
    const color = document.getElementById('colors').value
    return color
}

function generateHTML(data) {
    document.body.style.backgroundColor = data
}

function saveColor(data) {
    localStorage.setItem('color', data)
}

function loadColor() {
    const color = localStorage.getItem('color')
    generateHTML(color)
    document.getElementById('colors').value = color
}

function changeColor() {
    const data = collectData()
    generateHTML(data)
    saveColor(data)
}

loadColor()