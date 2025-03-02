"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductValidator = exports.getPerCategoryValidator = exports.newProductValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newProductValidator = joi_1.default.object({
    name: joi_1.default.string().max(255).required(),
    price: joi_1.default.number().min(0).required(),
    productionTime: joi_1.default.date().required(),
    expirationTime: joi_1.default.date().required(),
    categoryId: joi_1.default.string().uuid().required()
});
exports.getPerCategoryValidator = joi_1.default.object({
    categoryId: joi_1.default.string().uuid().required()
});
exports.deleteProductValidator = joi_1.default.object({
    id: joi_1.default.string().uuid().required()
});
