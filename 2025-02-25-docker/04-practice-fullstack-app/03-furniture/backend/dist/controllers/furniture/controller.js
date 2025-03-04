"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFurnitures = getFurnitures;
exports.createFurniture = createFurniture;
const furniture_1 = __importDefault(require("../../models/furniture"));
const type_1 = __importDefault(require("../../models/type"));
const http_status_codes_1 = require("http-status-codes");
async function getFurnitures(req, res, next) {
    try {
        const furnitures = await furniture_1.default.findAll({
            include: [type_1.default],
        });
        res.status(http_status_codes_1.StatusCodes.OK).json(furnitures);
    }
    catch (e) {
        next(e);
    }
}
async function createFurniture(req, res, next) {
    try {
        const newFurniture = await furniture_1.default.create(req.body);
        res.json(newFurniture);
    }
    catch (e) {
        next(e);
    }
}
