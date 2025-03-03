import { Router } from "express";
import { getTypes } from "../controllers/type/controller";

const typeRouter = Router()

typeRouter.get('/', getTypes) // get all

export default typeRouter