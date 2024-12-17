"use strict";

(() => {
    const getData = url => fetch(url).then(response => response.json())

    const generateHTML = users => {
        const newHTML =
            users
                .map(user => {
                    const {
                        first_name,
                        last_name,
                        email,
                        avatar
                    } = user;
                    return `
                <tr>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${email}</td>
                    <td><img src="${avatar}"></td>
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
            const usersObject = await getData('https://reqres.in/api/users')
            const users = usersObject.data
            console.log(users)

            // generate HTML
            const newHTML = generateHTML(users)

            // render HTML
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }

    })
})()


