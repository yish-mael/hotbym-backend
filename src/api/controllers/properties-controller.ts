import { Request, Response } from "express";
import PropertyService from "../services/property-service";
import UploadService from "../services/upload-service";

class PropertiesController {

    constructor() {}

    static async getAllProperties(req: Request, res: Response)
    {
        try{
            const allProperties =  await PropertyService.getAll();
            return res.status(200).json(allProperties);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getPropertyImages(req: Request, res: Response)
    {
        try{
            //console.log(req.body.propertyId);
            const allPropertyImages =  await UploadService.getWhere({type: "property", typeId: req.body.propertyId});
            return res.status(200).json(allPropertyImages);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneProperty(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneProperty = await PropertyService.getById(id);
            return res.status(200).json(oneProperty);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createProperty(req: Request, res: Response)
    {
        try{
            const createdProperty = await PropertyService.create(req.body);
            return res.status(200).json({
                message: "Property created successfully.",
                data: createdProperty
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateProperty(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedProperty = await PropertyService.update(id, req.body);
            return res.status(200).json({
                message: "Property updated successfully.",
                data: updatedProperty
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteProperty(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedProperty = await PropertyService.delete(id);
            return res.status(200).json({
                message: "Property deleted successfully.",
                data: deletedProperty
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default PropertiesController;