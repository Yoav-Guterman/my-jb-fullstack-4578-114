"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notFound;
const app_error_1 = __importDefault(require("../errors/app-error"));
const http_status_codes_1 = require("http-status-codes");
function notFound(req, res, next) {
    next(new app_error_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'not found'));
}
