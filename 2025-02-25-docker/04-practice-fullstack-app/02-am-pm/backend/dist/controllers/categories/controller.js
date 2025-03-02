"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = getAllCategories;
const category_1 = __importDefault(require("../../models/category"));
async function getAllCategories(req, res, next) {
    try {
        const categories = await category_1.default.findAll();
        res.json(categories);
    }
    catch (e) {
        next(e);
    }
}
