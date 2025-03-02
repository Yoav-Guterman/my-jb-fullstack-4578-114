"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPerCategory = getPerCategory;
exports.add = add;
exports.remove = remove;
const category_1 = __importDefault(require("../../models/category"));
const product_1 = __importDefault(require("../../models/product"));
async function getPerCategory(req, res, next) {
    try {
        const { categoryId } = req.params;
        const category = await category_1.default.findByPk(categoryId, {
            include: [product_1.default]
        });
        res.json(category.products);
    }
    catch (e) {
        next(e);
    }
}
async function add(req, res, next) {
    try {
        const newProduct = await product_1.default.create(req.body);
        res.json(newProduct);
    }
    catch (e) {
        next(e);
    }
}
async function remove(req, res, next) {
    try {
        const { id } = req.params;
        await product_1.default.destroy({ where: { id } });
        res.json({ success: true });
    }
    catch (e) {
        next(e);
    }
}
