"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidator = exports.loginValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginValidator = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(6).max(40).required(),
    password: joi_1.default.string().min(6).max(40).required()
});
exports.signupValidator = exports.loginValidator.append({
    name: joi_1.default.string().alphanum().min(2).max(40).required(),
});
