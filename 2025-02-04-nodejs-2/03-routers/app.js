const express = require('express')

const user = {
    name: 'Yuval',
    email: 'yuval@gmail.com',
    age: 23
}

const logRequest = (req, res, next) => {
    console.log(`got a ${req.method} request to endpoint ${req.url}`)
    next()
}

const connectToMysql = (req, res, next) => {
    console.log('connecting to my sql...')
    next()
}

const disconnectFromMysql = (req, res, next) => {
    console.log('disconnecting from my sql...')
    next()
}

const notFound = (req, res, next) => {
    res.status(404)
    res.send('the page u requested not found')
    next()
}


const saveUser = (req, res, next) => {
    console.log('saved user...')
    res.send('user saved successfully')
}

const printUser = (req, res, next) => {
    res.json(user) // after closing a respose, i dont neccessarily need a next
}

const connectToMongo = (req, res, next) => {
    console.log('connecting to my Mongo...')
    next()
}

const sendWelcomeEmail = (req, res, next) => {
    console.log('sending a welcome email!')
    next()
}

const app = express()
const userRouter = express.Router()

app.use(logRequest)
app.use('/user', userRouter)
app.use('/list', listRouter)
app.use('/products', userRouter)
app.use('/admin', listRouter)


app.use()
app.use(notFound)

app.listen(3000, () => console.log('express app started on post 3000...'))