"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractUserFromToken = extractUserFromToken;
exports.requireAuth = requireAuth;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("config"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
function extractUserFromToken(req, res, next) {
    try {
        // get the jwt secret
        const secret = config_1.default.get('app.jwtSecret');
        // get header
        const authHeader = req.headers.authorization;
        // Validate format
        if (authHeader && authHeader.startsWith('Bearer ')) {
            // Extract token
            const token = authHeader.split(' ')[1];
            // Decode
            const decoded = (0, jsonwebtoken_1.verify)(token, secret);
            // Store userId
            req.userId = decoded.id;
        }
        next();
    }
    catch (e) {
        next();
    }
}
function requireAuth(req, res, next) {
    try {
        if (!req.userId) {
            throw new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Authentication required');
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
    }
    catch (e) {
        next(e);
    }
}
