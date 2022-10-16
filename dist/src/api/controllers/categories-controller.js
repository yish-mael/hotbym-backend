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
const category_service_1 = __importDefault(require("../services/category-service"));
const upload_service_1 = __importDefault(require("../services/upload-service"));
class CategoriesController {
    constructor() { }
    static getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allCategories = yield category_service_1.default.getAll();
                return res.status(200).json(allCategories);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneCategory = yield category_service_1.default.getById(id);
                return res.status(200).json(oneCategory);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getCategoryImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(req.body.propertyId);
                const allCategoryImages = yield upload_service_1.default.getWhere({ type: "category", typeId: req.body.categoryId });
                return res.status(200).json(allCategoryImages);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdCategory = yield category_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Category created successfully.",
                    data: createdCategory
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedCategory = yield category_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Category updated successfully.",
                    data: updatedCategory
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedCategory = yield category_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Category deleted successfully.",
                    data: deletedCategory
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
exports.default = CategoriesController;
