"use strict";

(() => {
    const getData = async (url) => {
        const response = await fetch(url)
        return await response.json()
    }

    const generateHTML = user => {

        const {
            name,
            username,
            email,
            address: { street, city, zipcode },
            phone,
            company: { name: companyName }
        } = user;
        return `
                name: ${name}<br>
                user name: ${username}<br>
                email: ${email}<br>
                phone: ${phone}<br>
                city: ${city}<br>
                street: ${street}<br>
                zipcode: ${zipcode}<br>
                company name: ${companyName}<br>
                `
    }

    const renderHTML = newHTML => document.getElementById('showUser').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {

        try {
            const idNumber = parseInt(document.getElementById('idNumber').value)
            // get data
            const user = await getData(`https://jsonplaceholder.typicode.com/users/${idNumber}`)

            // generate HTML
            const newHTML = generateHTML(user)

            // render HTML
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }

    })
})()


