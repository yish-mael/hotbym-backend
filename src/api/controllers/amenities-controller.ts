import { Request, Response } from "express";
import AmenityService from "../services/amenity-service";

class AmenitiesController {

    constructor() {}

    static async getAllAmenities(req: Request, res: Response)
    {
        try{
            const allAmenities =  await AmenityService.getAll();
            return res.status(200).json(allAmenities);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneAmenity(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneAmenity = await AmenityService.getById(id);
            return res.status(200).json(oneAmenity);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createAmenity(req: Request, res: Response)
    {
        try{
            const createdAmenity = await AmenityService.create(req.body);
            return res.status(200).json({
                message: "Amenity created successfully.",
                data: createdAmenity
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateAmenity(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedAmenity = await AmenityService.update(id, req.body);
            return res.status(200).json({
                message: "Amenity updated successfully.",
                data: updatedAmenity
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteAmenity(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedAmenity = await AmenityService.delete(id);
            return res.status(200).json({
                message: "Amenity deleted successfully.",
                data: deletedAmenity
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default AmenitiesController;