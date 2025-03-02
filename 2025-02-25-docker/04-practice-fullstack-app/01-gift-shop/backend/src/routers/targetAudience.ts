import { Router } from "express";
import { getGiftsFilteredByTargetAudience, getTargetAudiences } from "../controllers/targetAudience/controller";

const audienceTargetRouter = Router()

audienceTargetRouter.get('/', getTargetAudiences)
audienceTargetRouter.get('/:id', getGiftsFilteredByTargetAudience)


export default audienceTargetRouter