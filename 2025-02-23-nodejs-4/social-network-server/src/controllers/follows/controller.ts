import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";
import { col } from "sequelize";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";

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

        res.json(user);
    } catch (e) {
        next(e);
    }
}

export async function follow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        // need to find the person id so i can add him to follow id with the already user id as following, and the new person as followed
        const follow = await Follow.create({
            followerId: userId,
            followeeId: req.params.id
        })

        res.json(follow)
    } catch (e) {
        next(e)
    }
}

export async function unfollow(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        // need to find the person id so i can add him to follow id with the already user id as following, and the new person as followed
        const isUnfollowed = await Follow.destroy({
            where: {
                followerId: userId,
                followeeId: req.params.id
            }
        })
        if (!isUnfollowed) return next(
            new AppError(
                StatusCodes.NOT_FOUND,
                'tried to unfollow unexisting user'
            )
        )

        res.json({ success: true })

    } catch (e) {
        next(e)
    }
}

