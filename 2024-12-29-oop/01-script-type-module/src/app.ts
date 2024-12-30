import shopName, { showSale } from "./shop.js"
import { showSale as branchShowSale } from "./branch.js"

function sayHi() {
    console.log('hi')
    console.log(shopName)
    showSale()
    branchShowSale()
}

document.getElementById('button').addEventListener('click', () => {
    sayHi()
})