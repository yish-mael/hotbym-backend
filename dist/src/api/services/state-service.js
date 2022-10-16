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
const models_1 = require("../models");
class StateService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.StateModel.findAll({
                include: models_1.CountryModel,
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.StateModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(criteria);
            return yield models_1.StateModel.findAll({ where: criteria });
        });
    }
    static getCountryStates(countryId) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(criteria);
            return yield models_1.StateModel.findAll({ where: { countryId } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, countryId } = values;
            const [state, created] = yield models_1.StateModel.findOrCreate({ where: { name, countryId } });
            if (created == false)
                throw "State already exists.";
            return state;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.StateModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = yield this.getById(id);
            return yield (state === null || state === void 0 ? void 0 : state.destroy());
        });
    }
}
exports.default = StateService;
