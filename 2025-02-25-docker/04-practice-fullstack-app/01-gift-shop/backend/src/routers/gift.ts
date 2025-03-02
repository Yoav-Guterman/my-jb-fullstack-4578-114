import { Router } from "express";
import { addGift } from "../controllers/gift/controller";
import { newGiftValidator } from "../controllers/gift/validator";
import validation from "../middlewares/validation";

const giftRouter = Router()

giftRouter.post('/', validation(newGiftValidator) ,addGift)

export default giftRouter