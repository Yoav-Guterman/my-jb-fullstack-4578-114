import { NextFunction, Request, Response } from "express";
import Job from "../../models/job";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const jobs = await Job.findAll()
        res.json(jobs)
    } catch (e) {
        next(e)
    }
}