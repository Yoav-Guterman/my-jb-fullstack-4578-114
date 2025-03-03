import { Router } from "express";
import validation from "../middlewares/validation";
import { createFurniture, getFurnitures } from "../controllers/furniture/controller";
import { newFurnitureValidator } from "../controllers/furniture/validator";

const furnitureRouter = Router()

furnitureRouter.get('/', getFurnitures) // get all
furnitureRouter.post('/', validation(newFurnitureValidator), createFurniture)

export default furnitureRouter