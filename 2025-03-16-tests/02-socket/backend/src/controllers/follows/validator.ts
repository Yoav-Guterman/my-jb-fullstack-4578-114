import Joi from "joi";

export const followValidator = Joi.object({
    id: Joi.string().uuid()
})

export const unfollowValidator = followValidator