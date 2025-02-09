const express = require('express')

const userRouter = express.Router()

app.use('/user', userRouter)
userRouter.use(connectToMysql)
userRouter.get(printUser)
userRouter.post(sendWelcomeEmail, saveUser)
userRouter.get(disconnectFromMysql)

module.exports = {

}