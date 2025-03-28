import { Router } from "express";
import { follow, getFollowers, getFollowing, unfollow } from "../controllers/follows/controller";
import paramValidation from "../middlewares/params-validation";
import { followValidator, unfollowValidator } from "../controllers/follows/validator";

const followsRouter = Router()

followsRouter.get('/followers', getFollowers)
followsRouter.get('/following', getFollowing)
followsRouter.post('/follow/:id', paramValidation(followValidator), follow)
// i can also use regex validation for the route params
// and then i don't need the validation middleware
// however, i will personally prefer the middleware
// router.post('/follow/:id(^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$)', follow)
followsRouter.post('/unfollow/:id', paramValidation(unfollowValidator), unfollow)

export default followsRouter