import { Router } from "express";
import { getFeed } from "../controllers/feed/controller";

const feedRouter = Router()

feedRouter.get('/', getFeed)

export default feedRouter