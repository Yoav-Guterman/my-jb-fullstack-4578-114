const products = [
    {
        id: 1,
        name: 'lenovo laptop',
        price: 600
    },
    {
        id: 2,
        name: 'HP screen 25',
        price: 600
    },
    {
        id: 3,
        name: 'logitech mouse',
        price: 20
    }
]

// save the data as JSON in local storage
localStorage.setItem('products', JSON.stringify(products))


// retrieve the data and parse back to object
const info = JSON.parse(localStorage.getItem('products'))
console.log(info)