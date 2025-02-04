// const { sum } = require('./calc')

// const number1 = +process.argv[2]
// const number2 = +process.argv[3]

(async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        users.foreach(user => console.log(user.name))
    } catch (e) {
        console.log(e)
    }
})()