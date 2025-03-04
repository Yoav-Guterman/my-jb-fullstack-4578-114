"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const config_1 = __importDefault(require("config"));
const sequelize_1 = __importDefault(require("./db/sequelize"));
const error_logger_1 = __importDefault(require("./middlewares/error/error-logger"));
const error_responder_1 = __importDefault(require("./middlewares/error/error-responder"));
const not_found_1 = __importDefault(require("./middlewares/not-found"));
const cors_1 = __importDefault(require("cors"));
const furnitures_1 = __importDefault(require("./routers/furnitures"));
const types_1 = __importDefault(require("./routers/types"));
const port = config_1.default.get('app.port');
const name = config_1.default.get('app.name');
const force = config_1.default.get('sequelize.sync.force');
const app = (0, express_1.default)();
(async () => {
    await sequelize_1.default.sync({ force });
    // basic middleware
    app.use((0, cors_1.default)()); // allow any client to use this server
    app.use((0, express_1.json)()); // a middleware to extract the post data and save it to the request object in case the content type of the request is application/json
    // Apply token extraction to ALL routes
    // This middleware will try to get the user from JWT if present
    // app.use(extractUserFromToken);
    app.use('/furnitures', furnitures_1.default);
    app.use('/types', types_1.default);
    // special notFound middleware
    app.use(not_found_1.default);
    // error middlewares
    app.use(error_logger_1.default);
    app.use(error_responder_1.default);
    app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();
