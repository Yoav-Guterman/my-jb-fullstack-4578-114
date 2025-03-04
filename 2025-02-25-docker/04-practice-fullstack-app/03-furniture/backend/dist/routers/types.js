"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/type/controller");
const typeRouter = (0, express_1.Router)();
typeRouter.get('/', controller_1.getTypes); // get all
exports.default = typeRouter;
