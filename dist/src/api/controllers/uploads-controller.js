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
const upload_service_1 = __importDefault(require("../services/upload-service"));
class UploadsController {
    constructor() { }
    static getAllUploads(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUploads = yield upload_service_1.default.getAll();
                return res.status(200).json(allUploads);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneUpload(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneUpload = yield upload_service_1.default.getById(id);
                return res.status(200).json(oneUpload);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createUpload(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUpload = yield upload_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Upload created successfully.",
                    data: createdUpload
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateUpload(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedUpload = yield upload_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Upload updated successfully.",
                    data: updatedUpload
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteUpload(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedUpload = yield upload_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Upload deleted successfully.",
                    data: deletedUpload
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
exports.default = UploadsController;
