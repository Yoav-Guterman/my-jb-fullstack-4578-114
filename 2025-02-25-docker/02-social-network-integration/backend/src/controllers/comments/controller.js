"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = createComment;
const comment_1 = __importDefault(require("../../models/comment"));
const user_1 = __importDefault(require("../../models/user"));
async function createComment(req, res, next) {
    try {
        const userId = req.userId;
        const { postId } = req.params;
        const comment = await comment_1.default.create(Object.assign({ userId,
            postId }, req.body));
        await comment.reload({
            include: [user_1.default]
        });
        res.json(comment);
    }
    catch (e) {
        next(e);
    }
}
