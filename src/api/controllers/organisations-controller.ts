import { Request, Response } from "express";
import OrganisationService from "../services/organisation-service";

class OrganisationsController {

    constructor() {}

    static async getUserOrganisations(req: Request, res: Response)
    {
        try{
            const userOrganisations =  await OrganisationService.getWhere({userId: parseInt(req.body.userId)});
            return res.status(200).json(userOrganisations);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    // static async getPropertyOrganisations(req: Request, res: Response)
    // {
    //     try{
    //         const propertyOrganisations =  await OrganisationService.getWhere({propertyId: parseInt(req.body.propertyId)});
    //         return res.status(200).json(propertyOrganisations);
    //     }catch(err){
    //         return res.status(500).json({
    //             error: err
    //         });
    //     }
    // }

    static async getAllOrganisations(req: Request, res: Response)
    {
        try{
            const allOrganisations =  await OrganisationService.getAll();
            return res.status(200).json(allOrganisations);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneOrganisation(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneOrganisation = await OrganisationService.getById(id);
            return res.status(200).json(oneOrganisation);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createOrganisation(req: Request, res: Response)
    {
        try{
            const createdOrganisation = await OrganisationService.create(req.body);
            return res.status(200).json({
                message: "Organisation created successfully.",
                data: createdOrganisation
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async updateOrganisation(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedOrganisation = await OrganisationService.update(id, req.body);
            return res.status(200).json({
                message: "Organisation updated successfully.",
                data: updatedOrganisation
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
    

    static async deleteOrganisation(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedOrganisation = await OrganisationService.delete(id);
            return res.status(200).json({
                message: "Organisation deleted successfully.",
                data: deletedOrganisation
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default OrganisationsController;