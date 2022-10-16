"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/api/app"));
const PORT = app_1.default.get('port') || 5600;
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
