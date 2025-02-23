import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/app-error';
import Post from '../../models/post'

export async function verifyPostOwnership(req: Request, res: Response, next: NextFunction) {
    try {
        // Get the post ID from request parameters
        const postId = req.params.id;

        // Get the authenticated user's ID (we know it exists because of requireAuth)
        const authenticatedUserId = req.userId;

        // Find the post
        const post = await Post.findByPk(postId);

        // Check if post exists
        if (!post) {
            throw new AppError(
                StatusCodes.NOT_FOUND,
                'Post not found'
            );
        }

        // Check if the authenticated user owns this post
        if (post.userId !== authenticatedUserId) {
            throw new AppError(
                StatusCodes.FORBIDDEN,
                'You do not have permission to modify this post'
            );
        }

        // If we get here, the user owns the post
        // Store the post in the request for the next middleware to use
        req.post = post;
        next();
    } catch (e) {
        next(e);
    }
}