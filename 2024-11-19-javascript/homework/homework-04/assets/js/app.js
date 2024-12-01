function collectData() {
    const pictureDescription = document.getElementById('pictureDescription').value
    const pictureURL = document.getElementById('pictureURL').value
    count += 1
    return {
        pictureDescription: pictureDescription,
        pictureURL: pictureURL,
        count: count
    }
}

function generateHTML(data) {
    const newHTML = {
        tableAdd:
            `<tr>
            <td>${data.pictureDescription}</td>
            <td><img src="${data.pictureURL}"></td>
        </tr>`,
        pictureCounter: `pictures in the list: ${data.count}`
    }
    return newHTML
}


function saveSingleCarToStorage(carObject) {
    const currentCarsInStorageJSON = localStorage.getItem('cars')

    let carsArray;
    if (!currentCarsInStorageJSON) {
        carsArray = []
    } else {
        carsArray = JSON.parse(currentCarsInStorageJSON)
    }
    carsArray.push(carObject)
    localStorage.setItem('cars', JSON.stringify(carsArray))
}

function renderHTML(newHTML) {
    const pictureList = document.getElementById("tableBody")
    pictureList.innerHTML += newHTML.tableAdd
    const pictureCounter = document.getElementById("pictureCounter")
    pictureCounter.innerHTML = newHTML.pictureCounter
}

function addPicture(event) {
    event.preventDefault()
    const data = collectData() // collect data and save
    const newHTML = generateHTML(data) //save data in the format
    saveSingleCarToStorage(data) // save the data to local storage
    renderHTML(newHTML) //use data
    clearForm()
}

function loadCarsFromLocalStorage() {
    const carsJSON = localStorage.getItem('cars')
    if (carsJSON) {
        const cars = JSON.parse(carsJSON)
        for (const car of cars) {
            const newHTML = generateHTML(car)
            renderHTML(newHTML)
        }
    }
}
let count = 0;
loadCarsFromLocalStorage()

