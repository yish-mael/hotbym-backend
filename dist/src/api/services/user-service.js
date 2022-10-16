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
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models/");
const email_messages_1 = require("../templates/email-messages");
class UserService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findAll({
                include: [models_1.RoleModel, { model: models_1.StateModel, include: [models_1.CountryModel] }],
                attributes: { exclude: ['password'] }
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findByPk(id, { include: [models_1.RoleModel, { model: models_1.StateModel, include: [models_1.CountryModel] }], });
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findAll({ where: criteria });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, middleName, lastName, email, telephone, gender, address, password, status, avatar, stateId, roleId } = values;
            const user = yield UserService.getWhere({ email: email });
            if (user.length > 0) {
                throw "Email already exists.";
            }
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedPassword = yield bcrypt_1.default.hash(password, salt);
            const message = (0, email_messages_1.accountCreatedEmail)(firstName);
            // await MailService.mailer({ 
            //     subject: "Account Created",
            //     recipient: email,
            //     message
            // });
            // console.log("here");
            return yield models_1.UserModel.create({
                firstName,
                middleName,
                lastName,
                email,
                telephone,
                gender,
                address,
                password: hashedPassword,
                status,
                avatar,
                stateId,
                roleId
            });
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield this.getById(id);
            return yield (country === null || country === void 0 ? void 0 : country.destroy());
        });
    }
}
exports.default = UserService;
// Get user by Id
// Get all users
// Get all active users
// Get all inactive users
// Get all pending users
// Get all users where
// Create user
// Update user by Id
// Delete user by Id
