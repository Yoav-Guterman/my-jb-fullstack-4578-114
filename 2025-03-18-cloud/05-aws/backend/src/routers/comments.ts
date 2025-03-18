import { Router } from "express";
import { newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import { createComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import paramValidation from "../middlewares/params-validation";

const commentsRouter = Router()

commentsRouter.post('/:postId', validation(newCommentValidator), paramValidation(newCommentParamsValidator), createComment)

export default commentsRouter