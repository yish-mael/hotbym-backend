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
class PropertyService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.PropertyModel.findAll({
                include: [models_1.UserModel, models_1.CategoryModel, { model: models_1.RoomModel, include: [models_1.BookingModel] }, { model: models_1.StateModel, include: [{ model: models_1.CountryModel, include: [models_1.StateModel] }] }]
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.PropertyModel.findByPk(id, {
                include: [models_1.UserModel, models_1.CategoryModel, { model: models_1.RoomModel, include: [models_1.BookingModel] }, { model: models_1.StateModel, include: [{ model: models_1.CountryModel, include: [models_1.StateModel] }] }]
            });
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.PropertyModel.findAll({ where: { criteria } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoryId, stateId, userId, name, email, telephone, status, address, description } = values;
            const [property, created] = yield models_1.PropertyModel.findOrCreate({ where: { categoryId, stateId, userId, name, email, telephone, status, address, description } });
            if (created == false)
                throw "Property already exists.";
            return property;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.PropertyModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield this.getById(id);
            return yield (property === null || property === void 0 ? void 0 : property.destroy());
        });
    }
}
exports.default = PropertyService;
