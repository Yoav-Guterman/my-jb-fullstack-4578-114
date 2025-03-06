import { NextFunction, Request, Response } from "express";
import Employee from "../../models/employee";
import Job from "../../models/job";

export async function getEmployeeByJob(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const jobId = req.params.id;
        const employees = await Employee.findAll({
            where: { jobId },
            include: [Job],
        });
        res.json(employees);
    } catch (e) {
        next(e);
    }
}

export async function add(req: Request<{}, {}, {
    firstName: string,
    employmentDate: Date,
    lastName: Date,
    address: string,
    jobId: string
}>, res: Response, next: NextFunction) {
    try {
        const newEmployee = await Employee.create(req.body)
        await newEmployee.reload({ include: [Job] })
        res.json(newEmployee)
    } catch (e) {
        next(e)
    }
}

export async function remove(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await Employee.destroy({ where: { id } })
        res.json({ success: true })
    } catch (e) {
        next(e)
    }
}