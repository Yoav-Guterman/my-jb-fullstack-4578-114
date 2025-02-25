"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("../../models/comment"));
const user_1 = __importDefault(require("../../models/user"));
const postIncludes = {
    include: [
        user_1.default,
        {
            model: comment_1.default,
            include: [user_1.default]
        }
    ]
};
exports.default = postIncludes;
