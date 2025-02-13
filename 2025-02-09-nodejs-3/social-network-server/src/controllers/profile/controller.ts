import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import { StatusCodes } from "http-status-codes";
import postIncludes from "../common/post-includes";
import TwitterError from "../../errors/twitter-error";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [{
                model: Post,
                ...postIncludes
            }]
        })
        res.json(user.posts)

        if (!user) {
            new TwitterError(
                StatusCodes.NOT_FOUND,
                'user profile not found'
            )
        }

    } catch (e) {
        next(e)
    }
}

export async function getPost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)
        res.json(post)
    } catch (e) {
        next(e)
    }
}

export async function deletePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        // this is how you delete an existing object
        // const post = await Post.findByPk(req.params.id)
        // await post.destroy

        // this is how we delete using static function,
        // when you don't already have a sequelize object:
        const id = req.params.id
        const deletedRows = await Post.destroy({
            where: { id }
        })
        if (deletedRows === 0) return next(
            new TwitterError(
                StatusCodes.NOT_FOUND,
                'the post you were trying tp delete does not exist'
            ))

        res.json({
            success: true
        })

    } catch (e) {
        next(e)
    }
}


export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const post = await Post.create({ ...req.body, userId })
        await post.reload(postIncludes)
        res.status(StatusCodes.CREATED).json(post)
    } catch (e) {
        next(e)
    }
}

export async function updatePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)

        if (!post) {
            throw new TwitterError(
                StatusCodes.NOT_FOUND,
                'Post not found'
            );
        }

        const { title, body } = req.body

        post.title = title
        post.body = body
        await post.save() // this command generates the actual SQL UPDATE
        res.json(post)

    } catch (e) {
        next(e)
    }
}