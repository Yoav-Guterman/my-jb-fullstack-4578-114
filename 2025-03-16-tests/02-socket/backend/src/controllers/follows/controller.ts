import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";
import { col } from "sequelize";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import socket from "../../io/io";
import SocketMessages from "02-socket-enums-yoavguterman";

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'followers'
            }],
            order: [[col('followers.name'), 'ASC']]
        })

        res.json(user.followers)
    } catch (e) {
        next(e)
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        // In a real app, you'd get this from authentication
        const userId = req.userId

        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'following',  // This matches the alias in the User model
            }]
        });

        res.json(user.following);
    } catch (e) {
        next(e);
    }
}

export async function follow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const followeeId = req.params.id
        // need to find the person id so i can add him to follow id with the already user id as following, and the new person as followed
        const follow = await Follow.create({
            followerId: userId,
            followeeId: followeeId
        })

        const follwerUser = await User.findByPk(followeeId)
        res.json(follow)
        socket.emit(SocketMessages.FOLLOW, {
            from: req.headers['x-client-id'], // req.header(), req.get()
            data: follwerUser
        })
        // i need to pass the followeeId
    } catch (e) {
        next(e)
    }
}

export async function unfollow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const followeeId = req.params.id

        // need to find the person id so i can add him to follow id with the already user id as following, and the new person as followed
        const isUnfollowed = await Follow.destroy({
            where: {
                followerId: userId,
                followeeId: followeeId
            }
        })
        if (!isUnfollowed) return next(
            new AppError(
                StatusCodes.NOT_FOUND,
                'tried to unfollow unexisting user'
            )
        )
        socket.emit(SocketMessages.UNFOLLOW, {
            from: req.headers['x-client-id'], // req.header(), req.get()
            data: { userId: followeeId }
        })

        res.json({ success: true })

    } catch (e) {
        next(e)
    }
}

