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

    const generateAgeAverageHTML = users => {
        const averageAge =
            users
                .map(user => user.age)
                .reduce((cumulative, current) => cumulative + current, 0)
        return `
            <tr>
                <td>average age is: ${averageAge / users.length}</td>
            </tr>
        `
    }

    const generateTallestAndShortestHTML = users => {
        const tallestAndShortest =
            users
                .reduce((cumulative, current) => {
                    cumulative.tallest = current.height > cumulative.tallest ? current.height : cumulative.tallest
                    cumulative.shortest = current.height < cumulative.shortest ? current.height : cumulative.shortest
                    return cumulative
                }, {
                    tallest: 0,
                    shortest: Infinity
                })

        const tallestUser = users.find(user => user.height === tallestAndShortest.tallest)
        const shortestUser = users.find(user => user.height === tallestAndShortest.shortest)

        return `
            <tr>
                <td>tallest user</td>
                <td>${tallestUser.firstName}</td>
                <td>${tallestUser.height}</td>
                <td>${tallestUser.id}</td>
            </tr>
            <tr>
                <td>shortest user</td>
                <td>${shortestUser.firstName}</td>
                <td>${shortestUser.height}</td>
                <td>${shortestUser.id}</td>
            </tr>`
    }

    const generateAverageWeightByGender = users => {
        const totalMales = users.filter(user => user.gender === 'male').length
        const totalFemale = users.filter(user => user.gender === 'female').length
        const averageWeightByGender =
            users
                .reduce((cumulative, current) => {
                    if (current.gender === 'male') {
                        cumulative.averageMaleWeight += current.weight
                    } else {
                        cumulative.averageFemaleWeight += current.weight
                    }
                    return cumulative
                }, {
                    averageMaleWeight: 0,
                    averageFemaleWeight: 0
                })
        return `
                <tr>
                    <td>the average male weight is: ${averageWeightByGender.averageMaleWeight / totalMales}</td>
                </tr>
                <tr>
                    <td>the average female weight is: ${averageWeightByGender.averageFemaleWeight / totalFemale}</td>
                </tr>`
    }

    const generateUserCountByCompany = users => {
        const uniqueCompanies = [...new Set(users.map(user => user.company.name))]
        return uniqueCompanies
            .map(company => `<tr>
                                <td>the company: ${company} has ${users.filter(user => user.company.name === company).length} employees in the users list </td>
                            </tr>`
            )
            .reduce((cumulative, current) => cumulative + current, '')
    }

    const generateMostCommonFirstName = users => {
        const uniqueName = [...new Set(users.map(user => user.firstName))]
            .map(firstName => ({
                firstName,
                count: users.filter(user => user.firstName === firstName).length
            }))
            .reduce((max, current) => current.count > max.count ? current : max, {
                firstName: '',
                count: 0
            })
        return `most common name is: ${uniqueName.firstName} which appears ${uniqueName.count} times`
    }

    const generateUniqueCitiesHTML = users => [...new Set(users.map(user => user.address.city))]
        .map(city => `<li>city: ${city}</li>`)
        .reduce((cumulative, current) => cumulative + current, '')

    const renderHTML = newHTML => document.getElementById('usersTable').innerHTML = newHTML

    const renderStatsHTML = statsHTML => document.getElementById('statsTable').innerHTML = statsHTML

    const renderHairColorHTML = hairColorHTML => document.getElementById('hairColor').innerHTML = hairColorHTML

    const renderAgeAverageHTML = ageAverageHTML => document.getElementById('averageAgeTable').innerHTML = ageAverageHTML

    const renderUniqueCitiesHTML = uniqueCitiesHTML => document.getElementById('uniqueCityList').innerHTML = uniqueCitiesHTML

    const renderTallestAndShortestHTML = tallestAndShortestHTML => document.getElementById('shortestAndTallestUsers').innerHTML = tallestAndShortestHTML

    const renderAverageWeightByGender = averageWeightByGender => document.getElementById('averageWeightByGender').innerHTML = averageWeightByGender

    const renderUserCountByCompany = userCountByCompany => document.getElementById('usersPerCompanyTable').innerHTML = userCountByCompany

    const renderMostCommonFirstName = mostCommonFirstName => document.getElementById('mostCommonName').innerHTML = mostCommonFirstName

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
            const ageAverageHTML = generateAgeAverageHTML(users)
            const uniqueCitiesHTML = generateUniqueCitiesHTML(users)
            const tallestAndShortestHTML = generateTallestAndShortestHTML(users)
            const averageWeightByGender = generateAverageWeightByGender(users)
            const userCountByCompany = generateUserCountByCompany(users)
            const mostCommonFirstName = generateMostCommonFirstName(users)


            // render HTML
            renderHTML(newHTML)
            renderStatsHTML(statsHTML)
            renderHairColorHTML(hairColorHTML)
            renderAgeAverageHTML(ageAverageHTML)
            renderUniqueCitiesHTML(uniqueCitiesHTML)
            renderTallestAndShortestHTML(tallestAndShortestHTML)
            renderAverageWeightByGender(averageWeightByGender)
            renderUserCountByCompany(userCountByCompany)
            renderMostCommonFirstName(mostCommonFirstName)


        } catch (e) {
            console.warn(e)
        }

    })
})()