"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = __importDefault(require("../models/user"));
const config_1 = __importDefault(require("config"));
const post_1 = __importDefault(require("../models/post"));
const comment_1 = __importDefault(require("../models/comment"));
const follow_1 = __importDefault(require("../models/follow"));
const logging = config_1.default.get('sequelize.logging') ? console.log : false;
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({ models: [user_1.default, post_1.default, comment_1.default, follow_1.default], dialect: 'mysql' }, config_1.default.get('db')), { logging }));
exports.default = sequelize;
