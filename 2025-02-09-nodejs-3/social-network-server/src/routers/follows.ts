import { Router } from "express";
import { follow, getFollowers, getFollowing } from "../controllers/follows/controller";

const followsRouter = Router()

followsRouter.get('/followers', getFollowers)
followsRouter.get('/following', getFollowing)
followsRouter.post('/follow/:id', follow)


export default followsRouter