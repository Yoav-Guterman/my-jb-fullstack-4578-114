function evalCode() {
    const code = document.getElementById('text').value
    try {
        eval(code)
    } catch (e) {
        console.log(e.message)
        alert(e.message)
    }
}