"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = getProfile;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.createPost = createPost;
exports.updatePost = updatePost;
const user_1 = __importDefault(require("../../models/user"));
const post_1 = __importDefault(require("../../models/post"));
const http_status_codes_1 = require("http-status-codes");
const post_includes_1 = __importDefault(require("../common/post-includes"));
const app_error_1 = __importDefault(require("../../errors/app-error"));
async function getProfile(req, res, next) {
    try {
        const user = await user_1.default.findByPk(req.userId, {
            include: [Object.assign({ model: post_1.default }, post_includes_1.default)]
        });
        res.json(user.posts);
        if (!user) {
            new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'user profile not found');
        }
    }
    catch (e) {
        next(e);
    }
}
async function getPost(req, res, next) {
    try {
        const post = await post_1.default.findByPk(req.params.id, post_includes_1.default);
        if (post === null)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'the post you were trying to load does not exist'));
        res.json(post);
    }
    catch (e) {
        next(e);
    }
}
async function deletePost(req, res, next) {
    try {
        // this is how you delete an existing object
        // const post = await Post.findByPk(req.params.id)
        // await post.destroy
        // this is how we delete using static function,
        // when you don't already have a sequelize object:
        const id = req.params.id;
        const deletedRows = await post_1.default.destroy({
            where: { id }
        });
        if (deletedRows === 0)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'the post you were trying tp delete does not exist'));
        res.json({
            success: true
        });
    }
    catch (e) {
        next(e);
    }
}
async function createPost(req, res, next) {
    try {
        const userId = req.userId;
        const post = await post_1.default.create(Object.assign(Object.assign({}, req.body), { userId }));
        await post.reload(post_includes_1.default);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(post);
    }
    catch (e) {
        next(e);
    }
}
async function updatePost(req, res, next) {
    try {
        const post = await post_1.default.findByPk(req.params.id, post_includes_1.default);
        const { title, body } = req.body;
        post.title = title;
        post.body = body;
        await post.save(); // this command generates the actual SQL UPDATE
        res.json(post);
    }
    catch (e) {
        next(e);
    }
}
