"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
function authenticate(req, res, next) {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    const secret = process.env.JWT_SECRET;
    if (token == null)
        return res.status(401).json({ error: "Access token is required." });
    jsonwebtoken_1.default.verify(token, secret, (err, user) => {
        if (err)
            return res.status(403).json({ error: err });
        req.body.authUser = user;
        next();
    });
}
exports.authenticate = authenticate;
