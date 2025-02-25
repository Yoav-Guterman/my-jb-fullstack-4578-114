"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPostOwnership = verifyPostOwnership;
const http_status_codes_1 = require("http-status-codes");
const app_error_1 = __importDefault(require("../../errors/app-error"));
const post_1 = __importDefault(require("../../models/post"));
async function verifyPostOwnership(req, res, next) {
    try {
        // Get the post ID from request parameters
        const postId = req.params.id;
        // Get the authenticated user's ID (we know it exists because of requireAuth)
        const authenticatedUserId = req.userId;
        // Find the post
        const post = await post_1.default.findByPk(postId);
        // Check if post exists
        if (!post) {
            throw new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Post not found');
        }
        // Check if the authenticated user owns this post
        if (post.userId !== authenticatedUserId) {
            throw new app_error_1.default(http_status_codes_1.StatusCodes.FORBIDDEN, 'You do not have permission to modify this post');
        }
        // If we get here, the user owns the post
        // Store the post in the request for the next middleware to use
        req.post = post;
        next();
    }
    catch (e) {
        next(e);
    }
}
