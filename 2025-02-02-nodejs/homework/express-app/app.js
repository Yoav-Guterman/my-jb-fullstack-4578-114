const { default: axios } = require('axios')
const express = require('express')
const { writeFile, appendFile } = require('fs/promises')

const logRequest = (req, res, next) => {
    console.log(`got a ${req.method} request to endpoint ${req.url}`)
    next()
}

const errorLogger = async (error) => {
    const errorMessage = `${new Date().toISOString()} - Error: ${error.message}\n`
    try {
        await appendFile('error.log', errorMessage)
    } catch (err) {
        console.error('Failed to write to error log:', err)
    }
}

const getData = async (url) => {
    const response = await axios.get(url)
    return response.data
}

const printUsers = async (req, res, next) => {
    try {
        const users = await getData('https://jsonplaceholder.typicode.com/users')
        res.json(users)
    } catch (e) {
        console.log(e)
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.query.id
        // Intentionally misspelled 'users' as 'us' to demonstrate error logging
        const user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`)
        res.json(user)
    } catch (error) {
        // Log the error here where we have more context
        await errorLogger(error)
        res.status(500).json({ error: 'Failed to fetch user' })
    }
}
const notFound = (req, res, next) => {
    res.status(404)
    res.send('the page u requested was not found on this server.... la la la')
}

const app = express()

// express server starts here
app.use(logRequest)


app.get('/users', printUsers)
app.get('/user', getUser)

app.use(notFound)



app.listen(3000, () => console.log('express app started on port 3000...'))