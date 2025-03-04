import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema } from "joi";
import AppError from "../errors/app-error";

export default function validation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.body = await validator.validateAsync(req.body)
            next()
        } catch (e) {
            next(new AppError(
                StatusCodes.UNPROCESSABLE_ENTITY, // 422 http code for Unprocessable Entity
                e.message
            ))
        }
    }
}
