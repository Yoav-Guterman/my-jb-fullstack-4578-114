const express = require('express')
const axios = require('axios')
const { toXML } = require('jstoxml')


const app = express()

// the naive way
// const getUsers = async (req, res, next) => {

//     const response = await axios('https://jsonplaceholder.typicode.com/users')
//     let users = response.data

//     // filter users if required
//     if (req.query.search) {
//         users = users.filter(({ name }) => name.includes(req.query.search))
//     }

//     // convert to xml if required
//     if (req.query.format === 'xml') {
//         res.setHeader('Content-type', 'text/xml')
//         return res.send(toXML(users))
//     }

//     res.json(users)
// }



// app.get('/users', getUsers)
const getData = async (req, res, next) => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    req.users = response.data
    next()
}

const filterData = (req, res, next) => {
    if (req.query.search) {
        req.users = req.users.filter(({ name }) => name.includes(req.query.search))
    }
    next()
}

const respond = (req, res, next) => {
    if (req.query.format === 'xml') {
        res.setHeader('Content-type', 'text/xml')
        return res.send(toXML(res.users))
    }
    res.json(users)

}

const errorHandler = (err, req, res, next) => {
    res.status(500).send(err.toString())
}

// modulate the big function to small functions
app.get('/users', getData, filterData, respond)
app.use(errorHandler)


app.listen(3000, () => console.log('started...'))