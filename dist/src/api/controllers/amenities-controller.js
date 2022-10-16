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
const amenity_service_1 = __importDefault(require("../services/amenity-service"));
class AmenitiesController {
    constructor() { }
    static getAllAmenities(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allAmenities = yield amenity_service_1.default.getAll();
                return res.status(200).json(allAmenities);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneAmenity = yield amenity_service_1.default.getById(id);
                return res.status(200).json(oneAmenity);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdAmenity = yield amenity_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Amenity created successfully.",
                    data: createdAmenity
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedAmenity = yield amenity_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Amenity updated successfully.",
                    data: updatedAmenity
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteAmenity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedAmenity = yield amenity_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Amenity deleted successfully.",
                    data: deletedAmenity
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
exports.default = AmenitiesController;
