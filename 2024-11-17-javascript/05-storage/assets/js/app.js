// 1. non persistent cookie - lives as long as the browser lives
// document.cookie - "theme=dark"
// console.log(document.cookie)

// 2. persistent cookie.
const expirationDate = new Date() //create a new date object that represent
expirationDate.setFullYear(expirationDate.getFullYear() + 1)
document.cookie = `theme=purple; expires=${expirationDate}`

// 3. session storage
sessionStorage.setItem('font', 'david')
console.log(sessionStorage.getItem('font'))

// 4. localStorage - persistent storage
// localStorage.setItem('font-size', '36')
console.log(localStorage.getItem('font-size'))
