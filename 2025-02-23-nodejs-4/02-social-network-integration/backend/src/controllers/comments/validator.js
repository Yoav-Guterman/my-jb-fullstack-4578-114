"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCommentParamsValidator = exports.newCommentValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newCommentValidator = joi_1.default.object({
    body: joi_1.default.string().min(20).required()
});
exports.newCommentParamsValidator = joi_1.default.object({
    postId: joi_1.default.string().uuid().required()
});
