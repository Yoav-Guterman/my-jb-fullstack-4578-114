// function sayGoodBye() {
//     // we won't use this way to access dom elements
//     // console.log(document.body.firstChild.nextSibling)
//     document.getElementById("myParagraph").innerText = "good bye!"
// }

function saveName() {
    const name = document.getElementById("nameInput").value
    localStorage.setItem('username', name)
    console.log(document.getElementById("nameInput").value)
}

function restoreName() {
    const name = localStorage.getItem('username')
    document.getElementById("nameInput")
}