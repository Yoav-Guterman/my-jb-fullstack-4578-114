import { Router } from "express";
import validation from "../middlewares/validation";
import { loginValidator, signupValidator } from "../controllers/auth/validator";
import { login, signUp } from "../controllers/auth/controller";

const authRouter = Router()

authRouter.post('/login', validation(loginValidator), login)
authRouter.post('/signup', validation(signupValidator), signUp)

export default authRouter