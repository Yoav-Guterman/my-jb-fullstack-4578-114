"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateHTML = image => {
        const newHTML = image
            .map(image => {
                const { title, thumbnailUrl } = image // deconstruction
                return `
                    <tr>
                <td>${title}</td>
                <td><img src="${thumbnailUrl}"></td>
            </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('table').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/todos')

            // generate html
            const newHTML = generateHTML(users)

            // render html
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }
    })

})()


