import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/params-validation";
import { add, getPerCategory, remove } from "../controllers/products/controller";
import { deleteProductValidator, getPerCategoryValidator, newProductValidator } from "../controllers/products/validator";

const productsRouter = Router()

productsRouter.get('/:categoryId', paramsValidation(getPerCategoryValidator), getPerCategory)
productsRouter.post('/', validation(newProductValidator), add)
productsRouter.delete('/:id', paramsValidation(deleteProductValidator), remove)



export default productsRouter