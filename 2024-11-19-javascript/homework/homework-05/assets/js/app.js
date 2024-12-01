// with javascript validation!
function collectData() {
    const animalType = document.getElementById('animalType').value
    const animalName = document.getElementById('animalName').value
    const animalAge = document.getElementById('animalAge').value
    const animalURL = document.getElementById('animalURL').value

    let isAnimalType = false
    let isAnimalName = false
    let isAnimalAge = false
    let isAnimalURL = false

    if (!animalType) {
        alert('please enter animal Type')
        isAnimalType = false
    } else {
        isAnimalType = true
    }

    if (!animalName) {
        alert('please enter animal Name')
        isAnimalName = false
    } else {
        isAnimalName = true
    }

    if (!animalAge || Number(animalAge) < 0) {
        alert('animal age must be a positive number')
        isAnimalAge = false
    } else {
        isAnimalAge = true
    }

    if (!animalURL) {
        alert('please enter animal URL')
        isAnimalURL = false
    } else {
        isAnimalURL = true
    }

    if (isAnimalURL && isAnimalAge && isAnimalName && isAnimalType) {
        return {
            animalType: animalType,
            animalName: animalName,
            animalAge: animalAge,
            animalURL: animalURL
        }
    } else {
        return null
    }
}

function generateHTML(data) {
    const newHTML =
        `<tr>
            <td>${data.animalType}</td>
            <td>${data.animalName}</td>
            <td>${data.animalAge}</td>
            <td><img src="${data.animalURL}"></td>
        </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const animalTable = document.getElementById('animalTable')
    animalTable.innerHTML += newHTML
}

function saveSingleAnimalToStorage(AnimalObject) {
    const currentAnimalsInStorageJSON = localStorage.getItem('animals')

    let AnimalsArray;
    if (!currentAnimalsInStorageJSON) {
        AnimalsArray = []
    } else {
        AnimalsArray = JSON.parse(currentAnimalsInStorageJSON)
    }
    AnimalsArray.push(AnimalObject)
    localStorage.setItem('animals', JSON.stringify(AnimalsArray))
}

function addAnimal(event) {
    // event.preventDefault()
    const data = collectData() // collect data and save
    if (!data) return false // if data is null, will return false and not activate the button
    const newHTML = generateHTML(data) //save data in the format
    saveSingleAnimalToStorage(data)
    renderHTML(newHTML) //use data
    // clearForm()
}

function loadAnimalsFromLocalStorage() {
    const animalsJSON = localStorage.getItem('animals')
    if (animalsJSON) {
        const animals = JSON.parse(animalsJSON)
        for (const animal of animals) {
            const newHTML = generateHTML(animal)
            renderHTML(newHTML)
        }
    }
}

loadAnimalsFromLocalStorage()