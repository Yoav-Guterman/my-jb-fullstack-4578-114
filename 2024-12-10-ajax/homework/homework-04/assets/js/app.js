"use strict";

(() => {
    const getData = url => fetch(url).then(response => response.json())

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
                username: ${username}<br>
                email: ${email}<br>
                phone: ${phone}<br>
                city: ${city}<br>
                street: ${street}<br>
                zipcode: ${zipcode}<br>
                companyName: ${companyName}<br>`

    }

    const renderHTML = userHTML => document.getElementById('showUser').innerHTML = userHTML

    const showUser = async () => {
        try {
            const userID = document.getElementById('selectUser').value
            const user = await getData(`https://jsonplaceholder.typicode.com/users/${userID}`)
            const userHTML = generateHTML(user)
            renderHTML(userHTML)
        } catch (e) {
            console.warn(e)
        }

    }

    document.getElementById('selectUser').addEventListener('change', showUser)


    const loadHTML = async () => {
        try {
            const users = await getData('https://jsonplaceholder.typicode.com/users')
            const loadHTML = loadSelectHTML(users)
            renderSelect(loadHTML)
        } catch (e) {
            console.warn(e)
        }

    }


    const loadSelectHTML = users =>
        users
            .map(user => `<option value="${user.id}">${user.name}</option>`
            )
            .reduce((cumulative, current) => cumulative + current, '')


    const renderSelect = loadHTML => document.getElementById('selectUser').innerHTML = loadHTML



    loadHTML()

})()


