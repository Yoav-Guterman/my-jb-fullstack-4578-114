"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypes = getTypes;
const type_1 = __importDefault(require("../../models/type"));
const http_status_codes_1 = require("http-status-codes");
async function getTypes(req, res, next) {
    try {
        const types = await type_1.default.findAll();
        res.status(http_status_codes_1.StatusCodes.OK).json(types);
    }
    catch (e) {
        next(e);
    }
}
