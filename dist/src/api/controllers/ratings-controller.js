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
const rating_service_1 = __importDefault(require("../services/rating-service"));
class RatingsController {
    constructor() { }
    static getAllRatings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allRatings = yield rating_service_1.default.getAll();
                return res.status(200).json(allRatings);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneRating(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneRating = yield rating_service_1.default.getById(id);
                return res.status(200).json(oneRating);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createRating(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdRating = yield rating_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Rating created successfully.",
                    data: createdRating
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateRating(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedRating = yield rating_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Rating updated successfully.",
                    data: updatedRating
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteRating(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedRating = yield rating_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Rating deleted successfully.",
                    data: deletedRating
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
exports.default = RatingsController;
