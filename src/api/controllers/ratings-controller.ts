import { Request, Response } from "express";
import RatingService from "../services/rating-service";

class RatingsController {

    constructor() {}

    static async getAllRatings(req: Request, res: Response)
    {
        try{
            const allRatings =  await RatingService.getAll();
            return res.status(200).json(allRatings);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneRating(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneRating = await RatingService.getById(id);
            return res.status(200).json(oneRating);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createRating(req: Request, res: Response)
    {
        try{
            const createdRating = await RatingService.create(req.body);
            return res.status(200).json({
                message: "Rating created successfully.",
                data: createdRating
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateRating(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedRating = await RatingService.update(id, req.body);
            return res.status(200).json({
                message: "Rating updated successfully.",
                data: updatedRating
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteRating(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedRating = await RatingService.delete(id);
            return res.status(200).json({
                message: "Rating deleted successfully.",
                data: deletedRating
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default RatingsController;