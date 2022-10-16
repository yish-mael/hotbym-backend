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
const property_service_1 = __importDefault(require("../services/property-service"));
const upload_service_1 = __importDefault(require("../services/upload-service"));
class PropertiesController {
    constructor() { }
    static getAllProperties(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProperties = yield property_service_1.default.getAll();
                return res.status(200).json(allProperties);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getPropertyImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(req.body.propertyId);
                const allPropertyImages = yield upload_service_1.default.getWhere({ type: "property", typeId: req.body.propertyId });
                return res.status(200).json(allPropertyImages);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneProperty = yield property_service_1.default.getById(id);
                return res.status(200).json(oneProperty);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdProperty = yield property_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Property created successfully.",
                    data: createdProperty
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedProperty = yield property_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Property updated successfully.",
                    data: updatedProperty
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedProperty = yield property_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Property deleted successfully.",
                    data: deletedProperty
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
exports.default = PropertiesController;
