import { NextFunction, Request, Response } from "express";
import Gift from "../../models/gift";
import TargetAudience from "../../models/audienceTarget";
import { StatusCodes } from "http-status-codes";

export async function addGift(req: Request, res: Response, next: NextFunction) {
    try{
        const gift = await Gift.create({ ...req.body })
        await gift.reload({include: [TargetAudience]})
        res.status(StatusCodes.CREATED).json(gift)
    } catch (e) {
        next (e)
    }
}