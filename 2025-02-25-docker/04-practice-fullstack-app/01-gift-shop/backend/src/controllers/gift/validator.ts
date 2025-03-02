import Joi from "joi";

export const newGiftValidator = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    targetAudienceId: Joi.string().uuid().required(),
    description: Joi.string().min(5).required(),
    price: Joi.number().min(0).required(),
    discount: Joi.number().min(0).max(100).required(),
})