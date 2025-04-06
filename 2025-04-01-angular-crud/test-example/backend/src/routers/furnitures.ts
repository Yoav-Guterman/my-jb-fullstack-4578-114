import { Router } from "express";
import validation from "../middlewares/validation";
import { create, getAll } from "../controllers/furnitures/controller";
import { newFurnitureValidator } from "../controllers/furnitures/validator";

const furnituresRouter = Router()

furnituresRouter.get('/', getAll)
furnituresRouter.post('/', validation(newFurnitureValidator), create)

export default furnituresRouter