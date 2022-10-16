"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//import swaggerDocument from "../config/swagger.json";
// const options = {
//     swagger: "2.0",
//     swaggerOptions: {
//       url: 'http://localhost:5700/api/'
//     },
// }
//connect();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true, origin: true }));
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Hotbym API",
            version: '1.0.0',
        },
    },
    apis: ["./src/api/routes/*.ts"],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.set('port', process.env.SERVER_PORT);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.default);
app.use((req, res, next) => {
    const error = {
        message: "Not found",
        status: 404
    };
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error });
});
exports.default = app;
