const axios = require('axios');

(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    response.data.forea
    ch(({ name }) => console.log(name))

})()

const axios = require('axios');

(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    response.data.forEach(({name}) => console.log(name))
})()