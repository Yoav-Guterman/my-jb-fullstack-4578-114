"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFollowers = getFollowers;
exports.getFollowing = getFollowing;
exports.follow = follow;
exports.unfollow = unfollow;
const user_1 = __importDefault(require("../../models/user"));
const follow_1 = __importDefault(require("../../models/follow"));
const sequelize_1 = require("sequelize");
const app_error_1 = __importDefault(require("../../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
async function getFollowers(req, res, next) {
    try {
        const userId = req.userId;
        const user = await user_1.default.findByPk(userId, {
            include: [{
                    model: user_1.default,
                    as: 'followers'
                }],
            order: [[(0, sequelize_1.col)('followers.name'), 'ASC']]
        });
        res.json(user.followers);
    }
    catch (e) {
        next(e);
    }
}
async function getFollowing(req, res, next) {
    try {
        // In a real app, you'd get this from authentication
        const userId = req.userId;
        const user = await user_1.default.findByPk(userId, {
            include: [{
                    model: user_1.default,
                    as: 'following', // This matches the alias in the User model
                }]
        });
        res.json(user.following);
    }
    catch (e) {
        next(e);
    }
}
async function follow(req, res, next) {
    try {
        const userId = req.userId;
        // need to find the person id so i can add him to follow id with the already user id as following, and the new person as followed
        const follow = await follow_1.default.create({
            followerId: userId,
            followeeId: req.params.id
        });
        res.json(follow);
    }
    catch (e) {
        next(e);
    }
}
async function unfollow(req, res, next) {
    try {
        const userId = req.userId;
        // need to find the person id so i can add him to follow id with the already user id as following, and the new person as followed
        const isUnfollowed = await follow_1.default.destroy({
            where: {
                followerId: userId,
                followeeId: req.params.id
            }
        });
        if (!isUnfollowed)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'tried to unfollow unexisting user'));
        res.json({ success: true });
    }
    catch (e) {
        next(e);
    }
}
