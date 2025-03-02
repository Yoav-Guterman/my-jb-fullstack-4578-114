"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/categories/controller");
const categoriesRouter = (0, express_1.Router)();
categoriesRouter.get('/', controller_1.getAllCategories);
exports.default = categoriesRouter;
