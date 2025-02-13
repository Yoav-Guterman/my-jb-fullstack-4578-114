import { NextFunction, Request, Response } from "express";
import TwitterError from "../errors/twitter-error";
import { StatusCodes } from "http-status-codes";

export default function notFound(req: Request, res: Response, next: NextFunction) {
    next(new TwitterError(
        StatusCodes.NOT_FOUND,
        'not found'
    ))
}