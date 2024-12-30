"use strict";

(() => {
    const getData = url => fetch(url).then(response => response.json())

    const generateHTML = users => {
        const newHTML =
            users
                .map(user => {
                    const {
                        id,
                        firstName,
                        email,
                        hair: { color },
                        height,
                        weight,
                        company: { name: companyName }
                    } = user // deconstruction
                    return `
                    <tr>
                        <td>${id}</td>
                        <td>${firstName}</td>
                        <td>${email}</td>
                        <td>${color}</td>
                        <td>${height}</td>
                        <td>${weight}</td>
                        <td>${companyName}</td>
                    </tr>
                `
                })
                .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const generateStatsHTML = users => {

        const statsHTML =
            users
                .reduce((cumulative, current) => {
                    cumulative.height += parseFloat(current.height)
                    cumulative.weight += parseFloat(current.weight)
                    return cumulative
                }, {
                    height: 0,
                    weight: 0
                })
        return `
                <tr>
                    <td>total users: ${users.length}</td>
                </tr>
                <tr>
                    <td>average height: ${statsHTML.height / users.length}</td>
                </tr>
                <tr>
                    <td>average weight: ${statsHTML.weight / users.length}</td>
                </tr>
                `
    }

    const generateHairColorHTML = users => {
        const uniqueHairColor = [...new Set(users.map(user => user.hair.color))]
        const uniqueHairColorHTML =
            uniqueHairColor
                .map(hairColor => ({
                    hairColor,
                    count: users.filter(user => user.hair.color === hairColor).length
                }))
                .map(hairColor => `
                    <tr>
                        <td>the hair color ${hairColor.hairColor}: appears ${hairColor.count} times</td>
                    </tr>`
                ).reduce((cumulative, current) => cumulative + current, '')
        return uniqueHairColorHTML

    }

    const renderHTML = newHTML => document.getElementById('usersTable').innerHTML = newHTML

    const renderStatsHTML = statsHTML => document.getElementById('statsTable').innerHTML = statsHTML

    const renderHairColorHTML = hairColorHTML => document.getElementById('hairColor').innerHTML = hairColorHTML

    document.getElementById('btn1').addEventListener('click', async () => {
        try {
            // get Data
            const usersObject = await getData('https://dummyjson.com/users')
            const users = usersObject.users
            console.log(users)

            // generate HTML
            const newHTML = generateHTML(users)
            const statsHTML = generateStatsHTML(users)
            const hairColorHTML = generateHairColorHTML(users)

            // render HTML
            renderHTML(newHTML)
            renderStatsHTML(statsHTML)
            renderHairColorHTML(hairColorHTML)
        } catch (e) {
            console.warn(e)
        }

    })
})()

// 1. למשוך את הנתונים משם באמצעות fetch
// 2. ⁠לצייר טבלה של הנתונים.
// 3. ⁠לעשות אגרציה בסיסית על הנתונים (לחשב נגיד את המשקל הממוצע או את הגובה הממוצע של המשתמשים.
// 4. ⁠לעשות אגרגצחה מורכבת. למשל לעשות טבלה של כמויות משתמשים לפי צבע שיער