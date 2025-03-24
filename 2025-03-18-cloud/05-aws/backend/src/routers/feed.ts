import { Router } from "express";
import { getFeed } from "../controllers/feed/controller";
import enforceAuth from "../middlewares/enforce-auth";

const feedRouter = Router()

feedRouter.use(enforceAuth)

feedRouter.get('/', getFeed)

export default feedRouter