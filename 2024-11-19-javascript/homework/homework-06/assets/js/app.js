function collectData() {
    const color = document.getElementById('colorName').value
    count += 1
    return {
        color: color,
        count: count
    }
}

function generateHTML(data) {
    const newHTML = {
        colorTable:
            `<tr>
            <th scope="row">${data.count}</th>
            <td>${data.color}</td>
            <td style="background-color: ${data.color};"></td>
        </tr>`,
        colorCount: `currently there are ${data.count} colors in the table`
    }
    return newHTML
}

function renderHTML(newHTML) {
    const colorTable = document.getElementById('colorTable')
    colorTable.innerHTML += newHTML.colorTable
    const colorCount = document.getElementById('colorCount')
    colorCount.innerHTML = newHTML.colorCount
}

function saveSingleColorToStorage(data) {
    const currentColorInStorageJSON = localStorage.getItem('colors')

    let colorArray;
    if (!currentColorInStorageJSON) {
        colorArray = []
    } else {
        colorArray = JSON.parse(currentColorInStorageJSON)
    }
    colorArray.push(data)
    localStorage.setItem('colors', JSON.stringify(colorArray))
}

function loadColorsFromLocalStorage() {
    const colorsJSON = localStorage.getItem('colors')
    if (colorsJSON) {
        const colors = JSON.parse(colorsJSON)
        for (const color of colors) {
            const newHTML = generateHTML(color)
            renderHTML(newHTML)
        }
    }
}

function loadColorCounter() {
    const colorsJSON = localStorage.getItem('colors')
    if (colorsJSON) {
        const colors = JSON.parse(colorsJSON)
        return colors.length
    }
    return 0
}


function addColor(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveSingleColorToStorage(data)
    renderHTML(newHTML)
    // clearForm()
}

let count = 0
loadColorsFromLocalStorage()
count = loadColorCounter()