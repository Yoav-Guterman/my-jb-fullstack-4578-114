"use strict";

(() => {
    const getData = async (url) => {
        const response = await fetch(url)
        return await response.json()
    }

    const generateEmailTable = users => {
        const emailArray =
            users
                .map(user => {
                    const emailSuffix = user.email.substring(user.email.indexOf('@'))
                    const emailEnding = emailSuffix.substring(emailSuffix.indexOf('.'))
                    return emailEnding
                }) // return new array with all the emails
                .reduce((cumulative, current) => {
                    let existingEmailSuffixIndex = cumulative.findIndex(user => user.email === current)
                    console.log(existingEmailSuffixIndex)
                    if (existingEmailSuffixIndex === -1) {
                        cumulative.push({
                            email: current,
                            count: 0,
                        })
                        existingEmailSuffixIndex = cumulative.findIndex(user => user.email === current)
                    }

                    cumulative[existingEmailSuffixIndex].count += 1

                    return cumulative
                }, [])
                .map(emailEndings =>
                    `<tr>
                        <td>${emailEndings.email}</td>
                        <td>${emailEndings.count}</td>
                    </tr>`
                )
                .reduce((cumulative, current) => cumulative + current, '')
        console.log(emailArray)
        return emailArray
    }

    const generateStatsTable = users => {

        const totalUsers = users.length
        const location =
            users
                .reduce((cumulative, current) => {
                    cumulative.lat += parseFloat(current.address.geo.lat);
                    cumulative.lng += parseFloat(current.address.geo.lng);
                    return cumulative
                }, {
                    lat: 0,
                    lng: 0
                })
        return `
            <tr>
                <td>total users:</td>
                <td>${totalUsers}</td>
            </tr>
            <tr>
                <td>average lat:</td>
                <td>${location.lat / totalUsers}</td>
            </tr>
            <tr>
                <td>average lng:</td>
                <td>${location.lng / totalUsers}</td>
            </tr>
        `
    }

    const generateHTML = users => {
        const newHTML =
            users
                .map(user => {
                    const {
                        name,
                        username,
                        email,
                        address: { street, city, zipcode },
                        phone,
                        company: { name: companyName }
                    } = user;
                    return `
                <tr>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${city}</td>
                    <td>${street}</td>
                    <td>${zipcode}</td>
                    <td>${companyName}</td>
                </tr>
            `
                })
                .reduce((cumulative, current) => cumulative + current, '')
        return newHTML

    }

    const renderHTML = newHTML => document.getElementById('tableBody').innerHTML = newHTML

    const renderStatsTable = newHTML => document.getElementById('statsTable').innerHTML = newHTML

    const renderEmailTable = emailTableHTML => document.getElementById('emailTable').innerHTML = emailTableHTML


    document.getElementById('button').addEventListener('click', async () => {

        try {
            // get data
            const users = await getData('https://jsonplaceholder.typicode.com/users')

            // generate HTML
            const newHTML = generateHTML(users)
            const statsTableHTML = generateStatsTable(users)
            const emailTableHTML = generateEmailTable(users)

            // render HTML
            renderHTML(newHTML)
            renderStatsTable(statsTableHTML)
            renderEmailTable(emailTableHTML)


        } catch (e) {
            console.warn(e)
        }

    })
})()


