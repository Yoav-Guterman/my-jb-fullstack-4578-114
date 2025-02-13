import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "joi";
import TwitterError from "../errors/twitter-error";

export default function validation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.body = await validator.validateAsync(req.body)
            next()
        } catch (e) {
            next(new TwitterError(
                StatusCodes.UNPROCESSABLE_ENTITY, // 422 http code for Unprocessable Entity
                e.message
            ))
        }
    }
}
