import { Request, Response } from "express";
import CountryService from "../services/country-service";

class CountriesController {

    constructor() {}

    static async getAllCountries(req: Request, res: Response)
    {
        try{
            const allCountries =  await CountryService.getAll();
            return res.status(200).json(allCountries);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneCountry(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneCoutry = await CountryService.getById(id);
            return res.status(200).json(oneCoutry);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createCountry(req: Request, res: Response)
    {
        try{
            const createdCountry = await CountryService.create(req.body);
            return res.status(200).json({
                message: "Country created successfully.",
                data: createdCountry
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateCountry(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedCountry = await CountryService.update(id, req.body);
            return res.status(200).json({
                message: "Country updated successfully.",
                data: updatedCountry
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteCountry(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedCountry = await CountryService.delete(id);
            return res.status(200).json({
                message: "Country deleted successfully.",
                data: deletedCountry
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default CountriesController;