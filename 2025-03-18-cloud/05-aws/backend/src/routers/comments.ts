import { Router } from "express";
import { newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import { createComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import paramValidation from "../middlewares/params-validation";
import enforceAuth from "../middlewares/enforce-auth";

const commentsRouter = Router()

commentsRouter.use(enforceAuth)

commentsRouter.post('/:postId', validation(newCommentValidator), paramValidation(newCommentParamsValidator), createComment)

export default commentsRouter