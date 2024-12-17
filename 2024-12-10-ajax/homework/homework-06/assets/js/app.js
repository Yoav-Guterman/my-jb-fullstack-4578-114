"use strict";

(() => {
    const getData = url => fetch(url).then(response => response.json())

    const generateAlbumHTML = photos => {
        const unique = [...new Set(photos.map(photo => photo.albumId))]
        const html =
            unique
                .map(albumId => ({
                    albumId,
                    numberOfPhotos: photos.filter(photo => photo.albumId === albumId).length
                }))
                .map(albumPhoto => {
                    return `<tr>
                    <td>album: ${albumPhoto.albumId}</td>
                    <td>number of photos: ${albumPhoto.numberOfPhotos}</td>
                </tr>`
                })
                .reduce((cum, cur) => cum + cur, '')
        console.log(html)
        return html
    }

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

    const renderPhotosPerAlbumHTML = photosForEachAlbumHTML => document.getElementById('photosPerAlbumTable').innerHTML = photosForEachAlbumHTML

    document.getElementById('button').addEventListener('click', async () => {

        try {
            // get data
            const photos = await getData('https://jsonplaceholder.typicode.com/photos')

            console.log(photos)
            const first100Photos = photos.slice(0, 100)
            // generate HTML
            const newHTML = generateHTML(first100Photos)

            const photosForEachAlbumHTML = generateAlbumHTML(photos)

            // render HTML
            renderHTML(newHTML)
            renderPhotosPerAlbumHTML(photosForEachAlbumHTML)



        } catch (e) {
            console.warn(e)
        }

    })
})()


