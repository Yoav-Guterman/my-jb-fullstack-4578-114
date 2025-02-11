import { Router } from "express";
import validation from "../middlewares/validation";
import { login } from "../controllers/auth/controller";
import { loginValidator } from "../controllers/auth/validator";

const authRouter = Router()

authRouter.post('/login', validation(loginValidator), login)

export default authRouter