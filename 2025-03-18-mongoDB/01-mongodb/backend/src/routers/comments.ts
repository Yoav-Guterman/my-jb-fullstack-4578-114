import { Router } from "express";
import { deleteCommentParamsValidator, newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import { createComment, deleteComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import paramValidation from "../middlewares/params-validation";
import enforceAuth from "../middlewares/enforce-auth";

const commentsRouter = Router()

commentsRouter.use(enforceAuth)

commentsRouter.post('/:postId', validation(newCommentValidator), paramValidation(newCommentParamsValidator), createComment)
commentsRouter.delete('/:postId/:commentId', paramValidation(deleteCommentParamsValidator), deleteComment)


export default commentsRouter