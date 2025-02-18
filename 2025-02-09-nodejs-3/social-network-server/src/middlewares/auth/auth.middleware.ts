import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import config from 'config'
import User from '../../models/user';
import TwitterError from '../../errors/twitter-error';
import { StatusCodes } from 'http-status-codes';
import Post from '../../models/post';

declare global {
    namespace Express {
        interface Request {
            userId?: string;
            post?: Post
        }
    }
}


export function extractUserFromToken(req: Request, res: Response, next: NextFunction) {
    try {
        // get the jwt secret
        const secret = config.get<string>('app.jwtSecret')

        // get header
        const authHeader = req.headers['authorization'];

        // Validate format
        if (authHeader && authHeader.startsWith('Bearer ')) {
            // Extract token
            const token = authHeader.split(' ')[1];

            // Decode
            const decoded = verify(token, secret) as User;

            // Store userId
            req.userId = decoded.id;
        }
        next()
    } catch (e) {
        next()
    }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.userId) {
        throw new TwitterError(
            StatusCodes.UNAUTHORIZED,
            'Authentication required'
        );
    }
    next();
}