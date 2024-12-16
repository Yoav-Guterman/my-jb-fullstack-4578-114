"use strict";

(() => {
    const getData = url => fetch(url).then(response => response.json())

    const generateHTML = photos => {
        const newHTML =
            photos
                .map(photo => {
                    const {
                        albumId,
                        id,
                        title,
                        thumbnailUrl
                    } = photo;
                    return `
                <tr>
                    <td>${albumId}</td>
                    <td>${id}</td>
                    <td>${title}</td>
                    <td><img src="${thumbnailUrl}"></td>
                </tr>
            `
                })
                .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('tableBody').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {

        try {
            // get data
            const photos = await getData('https://jsonplaceholder.typicode.com/photos')

            console.log(photos)
            const first100Photos = photos.slice(0, 100)
            // generate HTML
            const newHTML = generateHTML(first100Photos)

            // render HTML
            renderHTML(newHTML)


        } catch (e) {
            console.warn(e)
        }

    })
})()


