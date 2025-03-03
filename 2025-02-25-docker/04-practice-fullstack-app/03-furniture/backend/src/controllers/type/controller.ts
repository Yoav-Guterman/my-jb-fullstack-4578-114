import { NextFunction, Request, Response } from "express";
import Type from "../../models/type";
import { StatusCodes } from "http-status-codes";

export async function getTypes(req: Request, res: Response, next: NextFunction) {
    try {
        const types = await Type.findAll();
        res.status(StatusCodes.OK).json(types);
    } catch (e) {
        next(e);
    }
}