import { Request, Response } from "express";
import UploadService from "../services/upload-service";

class UploadsController {

    constructor() {}

    static async getAllUploads(req: Request, res: Response)
    {
        try{
            const allUploads =  await UploadService.getAll();
            return res.status(200).json(allUploads);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneUpload(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneUpload = await UploadService.getById(id);
            return res.status(200).json(oneUpload);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createUpload(req: Request, res: Response)
    {
        try{
            const createdUpload = await UploadService.create(req.body);
            return res.status(200).json({
                message: "Upload created successfully.",
                data: createdUpload
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateUpload(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedUpload = await UploadService.update(id, req.body);
            return res.status(200).json({
                message: "Upload updated successfully.",
                data: updatedUpload
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteUpload(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedUpload = await UploadService.delete(id);
            return res.status(200).json({
                message: "Upload deleted successfully.",
                data: deletedUpload
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default UploadsController;