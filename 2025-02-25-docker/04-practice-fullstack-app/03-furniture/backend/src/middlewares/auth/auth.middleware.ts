import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import config from 'config'
import AppError from '../../errors/app-error';
import { StatusCodes } from 'http-status-codes';

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}


export function extractUserFromToken(req: Request, res: Response, next: NextFunction) {
    try {
        // get the jwt secret
        const secret = config.get<string>('app.jwtSecret')

        // get header
        const authHeader = req.headers.authorization;

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
    try {
        if (!req.userId) {
            throw new AppError(
                StatusCodes.UNAUTHORIZED,
                'Authentication required'
            );
        }
        // check if exist the userId in database
        // but the downside is another call to the database and worse performance time

        // const user = await User.findByPk(req.userId);

        //     if (!user) {
        //         throw new AppError(
        //             StatusCodes.UNAUTHORIZED,
        //             'User no longer exists'
        //         );
        //     }
        // req.user = user;
        next();
    } catch (e) {
        next(e)
    }




}