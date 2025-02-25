"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostValidator = exports.newPostValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newPostValidator = joi_1.default.object({
    title: joi_1.default.string().min(10).max(40).required(),
    body: joi_1.default.string().min(20).required(),
});
exports.updatePostValidator = exports.newPostValidator;
