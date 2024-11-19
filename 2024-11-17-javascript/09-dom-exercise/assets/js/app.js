// function sayGoodBye() {
//     // we won't use this way to access dom elements
//     // console.log(document.body.firstChild.nextSibling)
//     document.getElementById("myParagraph").innerText = "good bye!"
// }

// function saveName() {
//     const name = document.getElementById("nameInput").value
//     localStorage.setItem('username', name)
//     console.log(document.getElementById("nameInput").value)
// }

// function restoreName() {
//     const name = localStorage.getItem('username')
//     document.getElementById("nameInput")
// }

function change() {
    // get access DOM elements
    const color = document.getElementById("colorInput")
    const text = document.getElementById("textInput")
    const myParagraph = document.getElementById("textParagraph")


    // give the color and text value to myParagraph
    myParagraph.style.color = color.value
    myParagraph.innerText = text.value
}