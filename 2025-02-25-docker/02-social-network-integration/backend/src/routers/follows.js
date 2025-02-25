"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/follows/controller");
const params_validation_1 = __importDefault(require("../middlewares/params-validation"));
const validator_1 = require("../controllers/follows/validator");
const followsRouter = (0, express_1.Router)();
followsRouter.get('/followers', controller_1.getFollowers);
followsRouter.get('/following', controller_1.getFollowing);
followsRouter.post('/follow/:id', (0, params_validation_1.default)(validator_1.followValidator), controller_1.follow);
// i can also use regex validation for the route params
// and then i don't need the validation middleware
// however, i will personally prefer the middleware
// router.post('/follow/:id(^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$)', follow)
followsRouter.post('/unfollow/:id', (0, params_validation_1.default)(validator_1.unfollowValidator), controller_1.unfollow);
exports.default = followsRouter;
