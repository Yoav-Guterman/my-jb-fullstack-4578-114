import { Router } from "express";
import validation from "../middlewares/validation";
import { getAll } from "../controllers/jobs/controller";

const jobsRouter = Router()

jobsRouter.get('/', getAll)

export default jobsRouter