"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = __importDefault(require("../middlewares/validation"));
const params_validation_1 = __importDefault(require("../middlewares/params-validation"));
const controller_1 = require("../controllers/products/controller");
const validator_1 = require("../controllers/products/validator");
const productsRouter = (0, express_1.Router)();
productsRouter.get('/:categoryId', (0, params_validation_1.default)(validator_1.getPerCategoryValidator), controller_1.getPerCategory);
productsRouter.post('/', (0, validation_1.default)(validator_1.newProductValidator), controller_1.add);
productsRouter.delete('/:id', (0, params_validation_1.default)(validator_1.deleteProductValidator), controller_1.remove);
exports.default = productsRouter;
