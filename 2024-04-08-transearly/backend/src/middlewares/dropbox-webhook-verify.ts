import { NextFunction, Request, Response } from "express";


export default function dropboxWebhookVerify(req: Request, res: Response, next: NextFunction) {

    try {
        next()
    } catch (e) {
        next(e)
    }
}
