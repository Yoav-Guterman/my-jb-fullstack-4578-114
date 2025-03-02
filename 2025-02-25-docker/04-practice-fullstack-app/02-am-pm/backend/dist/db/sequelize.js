"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("config"));
const product_1 = __importDefault(require("../models/product"));
const category_1 = __importDefault(require("../models/category"));
const logging = config_1.default.get('sequelize.logging') ? console.log : false;
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({ models: [product_1.default, category_1.default], dialect: 'mysql' }, config_1.default.get('db')), { logging }));
exports.default = sequelize;
