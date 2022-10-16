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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/");
class CommentService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CommentModel.findAll();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CommentModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CommentModel.findAll({ where: { criteria } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { parentId, propertyId, userId, comment, status } = values;
            const [commentDetails, created] = yield models_1.CommentModel.findOrCreate({ where: { parentId, propertyId, userId, comment, status } });
            if (created == false)
                throw "Category already exists.";
            return commentDetails;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CommentModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield this.getById(id);
            return yield (comment === null || comment === void 0 ? void 0 : comment.destroy());
        });
    }
}
exports.default = CommentService;
