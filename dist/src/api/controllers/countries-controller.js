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
const country_service_1 = __importDefault(require("../services/country-service"));
class CountriesController {
    constructor() { }
    static getAllCountries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allCountries = yield country_service_1.default.getAll();
                return res.status(200).json(allCountries);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneCountry = yield country_service_1.default.getById(id);
                return res.status(200).json(oneCountry);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdCountry = yield country_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Country created successfully.",
                    data: createdCountry
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedCountry = yield country_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Country updated successfully.",
                    data: updatedCountry
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedCountry = yield country_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Country deleted successfully.",
                    data: deletedCountry
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
exports.default = CountriesController;
