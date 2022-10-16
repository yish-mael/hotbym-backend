import { Request, Response } from "express";
import StateService from "../services/state-service";
import UploadService from "../services/upload-service";

class StatesController {

    constructor() {}

    static async getAllStates(req: Request, res: Response)
    {
        try{
            const allStates =  await StateService.getAll();
            return res.status(200).json(allStates);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getCountryStates(req: Request, res: Response)
    {
        try{
            const allStates =  await StateService.getCountryStates(parseInt(req.params.id));
            return res.status(200).json(allStates);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneState(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneState = await StateService.getById(id);
            return res.status(200).json(oneState);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getStateImages(req: Request, res: Response)
    {
        try{
            //console.log(req.body.propertyId);
            const allStateImages =  await UploadService.getWhere({type: "state", typeId: req.body.stateId});
            return res.status(200).json(allStateImages);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createState(req: Request, res: Response)
    {
        try{
            const createdState = await StateService.create(req.body);
            return res.status(200).json({
                message: "State created successfully.",
                data: createdState
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateState(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedState = await StateService.update(id, req.body);
            return res.status(200).json({
                message: "State updated successfully.",
                data: updatedState
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteState(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedState = await StateService.delete(id);
            return res.status(200).json({
                message: "State deleted successfully.",
                data: deletedState
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default StatesController;