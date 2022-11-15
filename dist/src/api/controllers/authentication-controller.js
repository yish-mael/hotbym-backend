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
const user_service_1 = __importDefault(require("../services/user-service"));
const authentication_service_1 = __importDefault(require("../services/authentication-service"));
class AuthenticationController {
    constructor() { }
    static signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authUser = yield authentication_service_1.default.signIn(req.body);
                res.cookie('jwt', authUser[1], { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });
                return res.status(200).json({
                    message: "Sign-in successful.",
                    accessToken: authUser[0],
                    refreshToken: authUser[1],
                    userId: authUser[3],
                    roleId: authUser[2],
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield user_service_1.default.create(req.body);
                //console.log("here");
                const accessToken = yield authentication_service_1.default.generateToken(createdUser.dataValues);
                const refreshToken = yield authentication_service_1.default.generateRefreshToken(createdUser.dataValues);
                res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });
                return res.status(200).json({
                    message: "User registered successfully.",
                    data: createdUser,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.cookies.jwt);
            try {
                yield authentication_service_1.default.removeRefreshToken(req.cookies.jwt);
                res.clearCookie('jwt', { httpOnly: true, secure: true });
                return res.status(200).json({
                    message: "Logout successful."
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static refreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await AuthenticationService.removeRefreshToken(req.cookies.jwt);
                //console.log("Hello there");
                //console.log(req.body);
                const access = yield authentication_service_1.default.generateAccessToken(req.cookies.jwt);
                console.log(req.cookies.jwt);
                console.log("access : ", access);
                return res.status(200).json({
                    message: "Access token generated.",
                    accessToken: access.token,
                    roleId: access.roleId,
                    userId: access.userId
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static forgotPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forgotPassRequest = yield authentication_service_1.default.forgotPassword(req.body.email);
                return res.status(200).json({
                    message: "Password reset link sent.",
                    data: forgotPassRequest
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static resetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield authentication_service_1.default.resetPassword({ token: req.params.token, password: req.body.password });
                return res.status(200).json({
                    message: "Password reset successful."
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
}
exports.default = AuthenticationController;
