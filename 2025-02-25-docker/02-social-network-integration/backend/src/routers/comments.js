"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = require("../controllers/comments/validator");
const controller_1 = require("../controllers/comments/controller");
const validation_1 = __importDefault(require("../middlewares/validation"));
const params_validation_1 = __importDefault(require("../middlewares/params-validation"));
const commentsRouter = (0, express_1.Router)();
commentsRouter.post('/:postId', (0, validation_1.default)(validator_1.newCommentValidator), (0, params_validation_1.default)(validator_1.newCommentParamsValidator), controller_1.createComment);
exports.default = commentsRouter;
