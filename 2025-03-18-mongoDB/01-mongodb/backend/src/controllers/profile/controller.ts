import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/app-error";
import socket from "../../io/io";
import SocketMessages from "02-socket-enums-yoavguterman";
import { PostModel } from "../../models/post";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {

        const userId = req.userId

        const profile = await PostModel.find({ userId }).populate(['user', 'comments.user'])

        res.json(profile.map(doc => doc.toObject()))
    } catch (e) {
        next(e)
    }
}

export async function getPost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const post = await PostModel.findById(req.params.id).populate(['user', 'comments.user'])
        res.json(post.toObject())
    } catch (e) {
        next(e)
    }
}


export async function deletePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.id

        const deleteResponse = await PostModel.deleteOne({ _id })

        if (deleteResponse.deletedCount === 0) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'post not found'))
        }

        res.json({
            success: true
        })


    } catch (e) {
        next(e)
    }
}


export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        let createParams = { ...req.body, userId, user: userId }

        // if (req.imageUrl) {
        //     const { imageUrl } = req
        //     createParams = { ...createParams, imageUrl }
        // }

        const post = new PostModel(createParams)
        const newPost = await post.populate(['user', 'comments.user'])
        newPost.save()
        res.json(newPost.toObject())

        socket.emit(SocketMessages.NEW_POST, {
            from: req.headers['x-client-id'], // req.header(), req.get()
            data: post
        })
    } catch (e) {
        next(e)
    }
}

export async function updatePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const post = await PostModel.findById(req.params.id)

        const { title, body } = req.body

        post.title = title
        post.body = body
        await post.save() // this command generates the actual SQL UPDATE
        res.json(post.toObject())

        socket.emit(SocketMessages.UPDATE_POST, {
            from: req.headers['x-client-id'], // req.header(), req.get()
            data: post
        })

    } catch (e) {
        next(e)
    }
}