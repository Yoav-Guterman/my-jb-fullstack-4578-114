"use strict";

(() => {

    const getData = async (url) => {
        const response = await fetch(url); // Waits for the fetch to complete
        return await response.json();      // Waits for the JSON parsing to complete
    };

    const generateHTML = photos => {
        const newHTML =
            photos
                .map(photo => {
                    const { title, thumbnailUrl } = photo // deconstruction
                    return `
                <tr>
                    <td>${title}</td>
                    <td><img src="${thumbnailUrl}"></td>
                </tr>`
                })
                .reduce((cumm, curr) => `${cumm}${curr}`, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('tableBody').innerHTML = newHTML


    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const photos = await getData('https://jsonplaceholder.typicode.com/photos')

            // generate html
            const newHTML = generateHTML(photos)

            // render html
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }

    })
})()


