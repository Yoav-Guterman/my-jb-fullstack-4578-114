"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validation;
const http_status_codes_1 = require("http-status-codes");
const app_error_1 = __importDefault(require("../errors/app-error"));
function validation(validator) {
    return async function (req, res, next) {
        try {
            req.body = await validator.validateAsync(req.body);
            next();
        }
        catch (e) {
            next(new app_error_1.default(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY, // 422 http code for Unprocessable Entity
            e.message));
        }
    };
}
