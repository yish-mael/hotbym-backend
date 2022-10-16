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
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const user_service_1 = __importDefault(require("./user-service"));
const email_messages_1 = require("../templates/email-messages");
const models_1 = require("../models");
const mail_service_1 = __importDefault(require("./mail-service"));
class AuthenticationService {
    constructor() { }
    static generateAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const secret = process.env.JWT_REFRESH_SECRET;
            if (refreshToken == null)
                throw "Refresh token is required.";
            const checkRefreshToken = yield models_1.RefreshTokenModel.findAll({ where: { token: refreshToken } });
            if (checkRefreshToken.length < 1)
                throw "Invalid refresh token.";
            // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
            console.log(checkRefreshToken[0].userId);
            return { token: jsonwebtoken_1.default.verify(refreshToken, secret, (err, user) => {
                    if (err)
                        throw err;
                    delete user.iat;
                    delete user.exp;
                    return this.generateToken(user);
                }),
                userId: checkRefreshToken[0].userId };
        });
    }
    static generateToken(tokenObject) {
        const secret = process.env.JWT_SECRET;
        return jsonwebtoken_1.default.sign(tokenObject, secret, { expiresIn: '15m' });
    }
    static generateRefreshToken(tokenObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const secret = process.env.JWT_REFRESH_SECRET;
            const refreshToken = jsonwebtoken_1.default.sign(tokenObject, secret, { expiresIn: 24 * 60 * 60 * 1000 });
            yield models_1.RefreshTokenModel.create({ token: refreshToken, userId: tokenObject.id });
            return refreshToken;
        });
    }
    static removeRefreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = yield models_1.RefreshTokenModel.findOne({ where: { token: token } });
            return yield (refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken.destroy());
        });
    }
    static signIn(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_service_1.default.getWhere({ email: credentials.email });
            if (user.length < 1)
                throw { email: "Email doesn't exists." };
            const match = yield bcrypt_1.default.compare(credentials.password, user[0].password);
            if (!match)
                throw { password: "Invalid password." };
            console.log(user);
            return [this.generateToken(user[0].dataValues), yield this.generateRefreshToken(user[0].dataValues), user[0].roleId, user[0].id];
        });
    }
    static forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_service_1.default.getWhere({ email: email });
            if (user.length < 1)
                throw { email: "Email doesn't exists." };
            // insert into the password reset table.
            const token = crypto_1.default.randomBytes(10).toString('hex');
            const currentDate = new Date();
            yield models_1.PasswordResetModel.upsert({
                email: email,
                token: token,
                token_created_at: currentDate
            });
            const link = "http://localhost:3000/change-password/" + token;
            const message = (0, email_messages_1.forgotPasswordEmail)(link);
            // send email with password reset link.
            return yield mail_service_1.default.mailer({ subject: "Password Reset Request", recipient: email, message });
        });
    }
    static resetPassword(values) {
        return __awaiter(this, void 0, void 0, function* () {
            // check if token exists.
            const tokenCheck = yield models_1.PasswordResetModel.findAll({ where: { token: values.token } });
            if (tokenCheck.length < 1)
                throw { token: "Token doesn't exists." };
            // check token expiry.
            const tokenDate = new Date(tokenCheck[0].token_created_at);
            const currentDate = new Date();
            const difference = currentDate.getTime() - tokenDate.getTime();
            const resultInMinutes = Math.round(difference / 60000);
            if (resultInMinutes > 20)
                throw { token: "Password reset token expired." };
            yield tokenCheck[0].destroy();
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedPassword = yield bcrypt_1.default.hash(values.password, salt);
            // update user password.
            const updatedUser = yield models_1.UserModel.update({ password: hashedPassword }, { where: { email: tokenCheck[0].email } });
            return updatedUser;
        });
    }
}
exports.default = AuthenticationService;
