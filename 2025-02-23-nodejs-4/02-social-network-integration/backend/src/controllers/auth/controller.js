"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.signUp = signUp;
const user_1 = __importDefault(require("../../models/user"));
const http_status_codes_1 = require("http-status-codes");
const crypto_1 = require("crypto");
const config_1 = __importDefault(require("config"));
const jsonwebtoken_1 = require("jsonwebtoken");
const app_error_1 = __importDefault(require("../../errors/app-error"));
function hashPassword(password) {
    return (0, crypto_1.createHmac)('sha256', config_1.default.get('app.secret'))
        .update(password)
        .digest('hex');
}
async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await user_1.default.findOne({
            where: {
                username,
                password: hashPassword(password)
            },
        });
        if (!user)
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'wrong credentials'));
        const jwt = (0, jsonwebtoken_1.sign)(user.get({ plain: true }), config_1.default.get('app.jwtSecret'));
        res.json({ jwt });
    }
    catch (e) {
        next(e);
    }
}
async function signUp(req, res, next) {
    const { username, password, name } = req.body;
    try {
        const user = await user_1.default.create({
            username,
            password: hashPassword(password),
            name
        });
        const jwt = (0, jsonwebtoken_1.sign)(user.get({ plain: true }), config_1.default.get('app.jwtSecret'));
        res.json({ jwt });
    }
    catch (e) {
        // if (e.name === 'SequelizeUniqueConstraintError') return next({
        //     status: 409,
        //     message: `username ${username} already exists. please try different username`
        // })
        if (e.name === 'SequelizeUniqueConstraintError')
            return next(new app_error_1.default(http_status_codes_1.StatusCodes.CONFLICT, `username ${username} already exists. please choose another username.`));
        next(e);
    }
}
