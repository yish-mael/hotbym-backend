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
class CategoryService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CategoryModel.findAll();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CategoryModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CategoryModel.findAll({ where: { criteria } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { parentId, name, slug, description } = values;
            const [category, created] = yield models_1.CategoryModel.findOrCreate({ where: { parentId, name, slug, description } });
            if (created == false)
                throw "Category already exists.";
            return category;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.CategoryModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.getById(id);
            return yield (category === null || category === void 0 ? void 0 : category.destroy());
        });
    }
}
exports.default = CategoryService;
