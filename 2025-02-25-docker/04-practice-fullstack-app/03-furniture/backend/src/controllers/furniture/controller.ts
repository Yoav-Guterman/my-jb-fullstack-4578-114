import { NextFunction, Request, Response } from "express";
import Furniture from "../../models/furniture";
import Type from "../../models/type";
import { StatusCodes } from "http-status-codes";

export async function getFurnitures(req: Request, res: Response, next: NextFunction) {
    try {
        const furnitures = await Furniture.findAll({
            include: [Type],
        });
        res.status(StatusCodes.OK).json(furnitures);
    } catch (e) {
        next(e);
    }
}

export async function createFurniture(req: Request<{}, {}, {
    size: string,
    typeId: string,
    color: string,
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newFurniture = await Furniture.create(req.body)
        res.json(newFurniture)
    } catch (e) {
        next(e)
    }
}