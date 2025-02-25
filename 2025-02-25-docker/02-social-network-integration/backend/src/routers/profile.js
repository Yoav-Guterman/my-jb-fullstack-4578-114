"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/profile/controller");
const validation_1 = __importDefault(require("../middlewares/validation"));
const validator_1 = require("../controllers/profile/validator");
const profileRouter = (0, express_1.Router)();
profileRouter.get('/', controller_1.getProfile);
profileRouter.get('/:id', controller_1.getPost);
profileRouter.delete('/:id', controller_1.deletePost);
profileRouter.post('/', (0, validation_1.default)(validator_1.newPostValidator), controller_1.createPost);
profileRouter.patch('/:id', (0, validation_1.default)(validator_1.updatePostValidator), controller_1.updatePost);
exports.default = profileRouter;
