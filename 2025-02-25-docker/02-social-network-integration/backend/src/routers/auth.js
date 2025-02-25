"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = __importDefault(require("../middlewares/validation"));
const validator_1 = require("../controllers/auth/validator");
const controller_1 = require("../controllers/auth/controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', (0, validation_1.default)(validator_1.loginValidator), controller_1.login);
authRouter.post('/signup', (0, validation_1.default)(validator_1.signupValidator), controller_1.signUp);
exports.default = authRouter;
