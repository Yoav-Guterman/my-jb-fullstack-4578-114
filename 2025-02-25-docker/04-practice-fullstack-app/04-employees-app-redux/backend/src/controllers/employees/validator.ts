import Joi from "joi";

export const newEmployeeValidator = Joi.object({
    firstName: Joi.string().max(255).required(),
    lastName: Joi.string().max(255).required(),
    address: Joi.string().required(),
    employmentDate: Joi.date().required(),
    jobId: Joi.string().uuid().required()
})

export const getPerJobValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const deleteEmployeeValidator = Joi.object({
    id: Joi.string().uuid().required()
})
