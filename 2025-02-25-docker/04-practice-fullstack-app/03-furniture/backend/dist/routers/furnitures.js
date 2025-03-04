"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = __importDefault(require("../middlewares/validation"));
const controller_1 = require("../controllers/furniture/controller");
const validator_1 = require("../controllers/furniture/validator");
const furnitureRouter = (0, express_1.Router)();
furnitureRouter.get('/', controller_1.getFurnitures); // get all
furnitureRouter.post('/', (0, validation_1.default)(validator_1.newFurnitureValidator), controller_1.createFurniture);
exports.default = furnitureRouter;
