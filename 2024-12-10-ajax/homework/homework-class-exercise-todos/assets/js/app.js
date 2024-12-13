"use strict";

(() => {

    const getData = async (url) => {
        const response = await fetch(url); // Waits for the fetch to complete
        return await response.json();      // Waits for the JSON parsing to complete
    };

    const generateUserStats = tasks => {
        const result = tasks.reduce((cumulative, current) => {

            let existingObjectIndex = cumulative.findIndex(user => user.userId === current.userId)
            if (existingObjectIndex === -1) {
                cumulative.push({
                    userId: current.userId,
                    completed: 0,
                    incompleted: 0
                })
                existingObjectIndex = cumulative.findIndex(user => user.userId === current.userId)
            }
            cumulative[existingObjectIndex].completed += current.completed ? 1 : 0
            cumulative[existingObjectIndex].incompleted += current.completed ? 0 : 1

            return cumulative
        }, [])
        console.log(result)
        const resultHTML =
            result
                .map(user => {
                    return `<tr>
                    <td>user id: ${user.userId}</td>
                    <td>tasks completed: ${user.completed}</td>
                    <td>tasks incomplited: ${user.incompleted}</td>
                </tr>`
                })
                .reduce((cumulative, current) => cumulative + current, '')
        console.log(resultHTML)
        return resultHTML
    }

    const generateStatistics = tasks => {

        const totalTasks = tasks.length
        const completedTasks = tasks.filter(task => task.completed).length
        const notCompletedTasks = totalTasks - completedTasks

        const statisticHTML =
            `<tr>
                <td>how many tasks are there:</td>
                <td>${totalTasks}</td>
            </tr>
                <tr>
                <td>how many tasks are completed:</td>
                <td>${completedTasks}</td>
            </tr>
                <tr>
                <td>how many tasks are not completed:</td>
                <td>${notCompletedTasks}</td>
            </tr>`
        return statisticHTML
    }

    const generateHTML = tasks => {
        const newHTML =
            tasks
                .map(task => {
                    const { userId, title, completed } = task // deconstruction
                    return `
                <tr>
                    <td>${userId}</td>
                    <td>${title}</td>
                    <td>${completed ? 'yes' : 'no'}</td>
                </tr>`
                })
                .reduce((cumm, curr) => `${cumm}${curr}`, '')
        return newHTML
    }

    const renderStatistics = statisticHTML => document.getElementById('statsTable').innerHTML = statisticHTML

    const renderHTML = newHTML => document.getElementById('tableBody').innerHTML = newHTML

    const renderUserStats = userStatsHTML => document.getElementById('statsPerUser').innerHTML = userStatsHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const tasks = await getData('https://jsonplaceholder.typicode.com/todos')

            // generate html
            const newHTML = generateHTML(tasks)
            const statisticHTML = generateStatistics(tasks)
            const userStatsHTML = generateUserStats(tasks)

            // render html
            renderHTML(newHTML)
            renderStatistics(statisticHTML)
            renderUserStats(userStatsHTML)

        } catch (e) {
            console.warn(e)
        }
    })
})()


