import { NextFunction, Request, Response } from "express";
import TargetAudience from "../../models/audienceTarget"
import Gift from "../../models/gift";


export async function getTargetAudiences(req: Request, res: Response, next: NextFunction) {
    try {
        const targetAudiences = await TargetAudience.findAll();
        res.status(200).json(targetAudiences)
    } catch (e) {
        next(e)
    }
}

// create another route with /all

export async function getGiftsFilteredByTargetAudience(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const id = req.params.id

        if (id === "all") {
            const allGifts = await Gift.findAll({ raw: true });
            res.status(200).json(allGifts);
        }

        const gifts = await Gift.findAll({
            where: {
                targetAudienceId: id
            },
            raw: true
        });

        res.status(200).json(gifts);
    } catch (e) {
        next(e);
    }
}