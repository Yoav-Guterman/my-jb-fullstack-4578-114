import Joi from "joi";

export const newFurnitureValidator = Joi.object({
    color: Joi.string().min(3).required(),
    size: Joi.string().min(3).required(),
    type: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
})