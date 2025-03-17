import { Router } from "express";
import { deletePost, getPost, getProfile, createPost, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { newPostFilesValidator, newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import { verifyPostOwnership } from "../middlewares/auth/verifyPostOwnership";
import filesValidation from "../middlewares/files-validation";
import fileUploader from "../middlewares/file-uploader";

const profileRouter = Router()

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', validation(newPostValidator), filesValidation(newPostFilesValidator), fileUploader, createPost)
profileRouter.patch('/:id', validation(updatePostValidator), updatePost)


export default profileRouter