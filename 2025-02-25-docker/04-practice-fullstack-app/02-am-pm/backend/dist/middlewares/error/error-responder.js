"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorResponder;
const app_error_1 = __importDefault(require("../../errors/app-error"));
function errorResponder(err, req, res, next) {
    if (err instanceof app_error_1.default) {
        res.status(err.status).send(err.message);
    }
    else {
        res.status(500).send(err.message);
    }
}
