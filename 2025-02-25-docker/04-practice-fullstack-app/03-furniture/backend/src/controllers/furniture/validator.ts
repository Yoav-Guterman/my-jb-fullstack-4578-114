import Joi from "joi";

export const newFurnitureValidator = Joi.object({
    typeId: Joi.string().uuid().required(),
    price: Joi.number().min(0).required(),
    color: Joi.string().required(),
    size: Joi.string().required(),
})