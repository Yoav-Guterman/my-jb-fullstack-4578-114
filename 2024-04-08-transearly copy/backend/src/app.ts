import express, { json } from "express"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import cors from 'cors'
import { connect } from "./db/mongoose"
import dropboxRouter from "./routers/dropbox"
import dropboxAuth from "./auth/dropbox"
import { createAppQueuesIfNotExist } from "./aws/sqs"


const app = express();

export async function start() {

    await connect()

    await createAppQueuesIfNotExist()

    app.use(cors()) // allow any client to use this server

    app.use(json()) // a middleware to extract the post data and save it to the request object in case the content type of the request is application/json

    app.use('/dropbox', dropboxAuth.initialize(), dropboxRouter)

    // special notFound middleware
    app.use(notFound)

    // error middlewares
    app.use(errorLogger)
    app.use(errorResponder)


    // app.listen(port, () => console.log(`${name} started on port ${port}...`))
}

export default app