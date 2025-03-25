import { NextFunction, Request, Response } from "express";
import socket from "../../io/io";
import SocketMessages from "02-socket-enums-yoavguterman";

export async function createComment(req: Request<{ postId: string }>, res: Response, next: NextFunction) {
    try {
        // const userId = req.userId

        // const { postId } = req.params

        // const comment = await Comment.create({
        //     userId,
        //     postId,
        //     ...req.body
        // })

        // await comment.reload({
        //     include: [User]
        // })
        // res.json(comment)
        // socket.emit(SocketMessages.NEW_COMMENT, {
        //     from: req.headers['x-client-id'], // req.header(), req.get()
        //     data: comment
        // })
    } catch (e) {
        next(e)
    }
}

