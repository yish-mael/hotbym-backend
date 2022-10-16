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
const favorite_service_1 = __importDefault(require("../services/favorite-service"));
class FavoritesController {
    constructor() { }
    static getUserFavorites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFavorites = yield favorite_service_1.default.getWhere({ userId: parseInt(req.body.userId) });
                return res.status(200).json(userFavorites);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getPropertyFavorites(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const propertyFavorites = yield favorite_service_1.default.getWhere({ propertyId: parseInt(req.body.propertyId) });
                return res.status(200).json(propertyFavorites);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    // static async getAllFavorites(req: Request, res: Response)
    // {
    //     try{
    //         const allFavorites =  await FavoriteService.getAll();
    //         return res.status(200).json(allFavorites);
    //     }catch(err){
    //         return res.status(500).json({
    //             error: err
    //         });
    //     }
    // }
    // static async getOneFavorite(req: Request, res: Response)
    // {
    //     try{
    //         const id =  parseInt(req.params.id);
    //         console.log(req.params.id);
    //         const oneFavorite = await FavoriteService.getById(id);
    //         return res.status(200).json(oneFavorite);
    //     }catch(err){
    //         return res.status(500).json({
    //             error: err
    //         });
    //     }
    // }
    static createFavorite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdFavorite = yield favorite_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Favorite created successfully.",
                    data: createdFavorite
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteFavorite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedFavorite = yield favorite_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Favorite deleted successfully.",
                    data: deletedFavorite
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
exports.default = FavoritesController;
