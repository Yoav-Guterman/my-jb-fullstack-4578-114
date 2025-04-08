import { NextFunction, Request, Response } from "express";

export async function verify(req: Request, res: Response, next: NextFunction) {
    try {
        res.send(req.query.challenge)
    } catch (e) {
        next(e)
    }
}

export async function webhook(req: Request, res: Response, next: NextFunction) {
    try {

        console.log(req.headers)
    } catch (e) {
        next(e)
    }
}

