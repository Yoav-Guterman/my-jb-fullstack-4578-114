"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorLogger;
function errorLogger(err, req, res, next) {
    console.error(err.message);
    next(err);
}
