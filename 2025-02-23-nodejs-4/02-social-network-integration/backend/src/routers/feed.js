"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/feed/controller");
const feedRouter = (0, express_1.Router)();
feedRouter.get('/', controller_1.getFeed);
exports.default = feedRouter;
