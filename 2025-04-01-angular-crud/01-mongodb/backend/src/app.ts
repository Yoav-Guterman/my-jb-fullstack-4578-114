import express, { json } from "express"
import config from 'config'
import profileRouter from "./routers/profile"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import followsRouter from "./routers/follows"
import commentsRouter from "./routers/comments"
import feedRouter from "./routers/feed"
import authRouter from "./routers/auth"
import cors from 'cors'
import fileUpload from "express-fileupload"
import { createAppBucketIfNotExist } from "./aws/s3"
import { createAppQueueIfNotExist, queueUrl } from "./aws/sqs"
import { connect } from "./db/mongoose"


const force = config.get<boolean>('sequelize.sync.force')

const app = express();

export async function start() {

    await connect()

    await createAppBucketIfNotExist();

    await createAppQueueIfNotExist();
    console.log(`queue url is ${queueUrl}`)

    // basic middleware
    app.use(cors()) // allow any client to use this server
    // app.use(cors({
    //     origin: 'https//localhost:5173'
    // })) // allow this specific clients

    app.use(json()) // a middleware to extract the post data and save it to the request object in case the content type of the request is application/json
    app.use(fileUpload())

    app.use('/auth', authRouter);
    app.use('/profile', profileRouter)
    app.use('/follows', followsRouter)
    app.use('/comments', commentsRouter)
    app.use('/feed', feedRouter)


    // special notFound middleware
    app.use(notFound)

    // error middlewares
    app.use(errorLogger)
    app.use(errorResponder)


    // app.listen(port, () => console.log(`${name} started on port ${port}...`))
}

export default app