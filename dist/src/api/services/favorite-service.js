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
class FavoriteService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.FavoriteModel.findAll();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.FavoriteModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.FavoriteModel.findAll({ where: { criteria } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { propertyId, userId } = values;
            const [favorite, created] = yield models_1.FavoriteModel.findOrCreate({ where: { propertyId, userId } });
            if (created == false)
                throw "Favorite already exists.";
            return favorite;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.FavoriteModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const favorite = yield this.getById(id);
            return yield (favorite === null || favorite === void 0 ? void 0 : favorite.destroy());
        });
    }
}
exports.default = FavoriteService;
