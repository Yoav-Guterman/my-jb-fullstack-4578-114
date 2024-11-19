function populate() {
    const animals = ['dog', 'cat', 'fish']

    const container = document.getElementById('container')

    for (const animal of animals) {
        container.innerHTML += `<li>${animal}</li>`
    }

}

function populateWithImages() {
    const images = [
        'hippo.jfif', 'hippo.jfif'
    ]

    const container = document.getElementById('imagesContainer')

    let newHTML = ''
    for (const image of images) {
        newHTML += `<img src="assets/images/${image}" />`
    }

    container.innerHTML = newHTML
}

function addFruit() {
    const container = document.getElementById('fruits')
    const fruit = prompt('please enter a fruit')
    const newHTML = `<li>${fruit}</li>`
    container.innerHTML += newHTML

}

function addCar() {
    // collect data
    const container = document.getElementById('cars')
    const car = document.getElementById('car').value

    // generate new HTML from the collected data
    const newHTML = `<li>${car}</li>`

    // render the new html to the DOM
    container.innerHTML += newHTML
}