import { Router } from "express";
import validation from "../middlewares/validation";
import { add, getEmployeeByJob, remove } from "../controllers/employees/controller";
import { deleteEmployeeValidator, getPerJobValidator, newEmployeeValidator } from "../controllers/employees/validator";
import paramsValidation from "../middlewares/params-validation";

const employeesRouter = Router()

employeesRouter.get('/:id', paramsValidation(getPerJobValidator), getEmployeeByJob)
employeesRouter.post('/', validation(newEmployeeValidator), add)
employeesRouter.delete('/:id', paramsValidation(deleteEmployeeValidator), remove)

export default employeesRouter