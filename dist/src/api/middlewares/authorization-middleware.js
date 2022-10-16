"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = void 0;
const role_service_1 = __importDefault(require("../services/role-service"));
function hasPermission(permission) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const role = yield role_service_1.default.getById(req.body.authUser.roleId);
        const permissions = role === null || role === void 0 ? void 0 : role.Permissions;
        let check = false;
        for (let i = 0; i < permissions.length; i++) {
            if (permissions[i].slug === permission)
                check = true;
        }
        if (check === false) {
            return res.status(401).json({ error: "You are not authorized to perform this action." });
        }
        next();
    });
}
exports.hasPermission = hasPermission;
