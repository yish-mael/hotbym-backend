import { Request, Response } from "express";
import FavoriteService from "../services/favorite-service";

class FavoritesController {

    constructor() {}

    static async getUserFavorites(req: Request, res: Response)
    {
        try{
            const userFavorites =  await FavoriteService.getWhere({userId: parseInt(req.body.userId)});
            return res.status(200).json(userFavorites);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getPropertyFavorites(req: Request, res: Response)
    {
        try{
            const propertyFavorites =  await FavoriteService.getWhere({propertyId: parseInt(req.body.propertyId)});
            return res.status(200).json(propertyFavorites);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
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

    static async createFavorite(req: Request, res: Response)
    {
        try{
            const createdFavorite = await FavoriteService.create(req.body);
            return res.status(200).json({
                message: "Favorite created successfully.",
                data: createdFavorite
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
    

    static async deleteFavorite(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedFavorite = await FavoriteService.delete(id);
            return res.status(200).json({
                message: "Favorite deleted successfully.",
                data: deletedFavorite
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default FavoritesController;