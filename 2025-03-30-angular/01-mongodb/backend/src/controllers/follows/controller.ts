import { NextFunction, Request, Response } from "express";
import { col } from "sequelize";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import socket from "../../io/io";
import SocketMessages from "02-socket-enums-yoavguterman";
import { UserModel } from "../../models/user";

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const followers = await UserModel.find({
            following: {
                $in: userId
            }
        })

        res.json(followers.map(user => user.toObject()))

    } catch (e) {
        next(e)
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const user = await UserModel.findById(userId)
        res.json(user.following)
    } catch (e) {
        next(e);
    }
}

export async function follow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        // 1. the javascript way
        // const user = await UserModel.findById(userId)
        // user.following.push(req.params.id)
        // await user.save()
        const user = await UserModel.findOneAndUpdate({
            _id: userId
        }, {
            $push: {
                following: req.params.id
            }
        }, {
            new: true
        })

        res.json(user.toObject())

    } catch (e) {
        next(e)
    }
}

export async function unfollow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {

        const userId = req.userId

        const user = await UserModel.findOneAndUpdate({
            _id: userId
        }, {
            $pull: {
                following: req.params.id
            }
        }, {
            new: true
        })

        res.json({ success: true })

    } catch (e) {
        next(e)
    }
}

