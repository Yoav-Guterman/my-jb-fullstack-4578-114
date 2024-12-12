"use strict";

(() => {

    const getData = async (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // console.log(users)
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = users => {
        const newHTML = users
            .map(user => {
                const { name, email } = user // deconstruction
                return `<li>name: ${name}, email: ${email}</li>`
            })
            .reduce((cumm, curr) => `${cumm}${curr}`, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('users').innerHTML = newHTML


    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/users')

            // generate html
            const newHTML = generateHTML(users)

            // render html
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }

    })
})()


