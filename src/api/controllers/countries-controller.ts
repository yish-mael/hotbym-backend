import { Request, Response } from "express";
import CountryService from "../services/country-service";

class CountriesController {

    constructor() {}

    static async getAllCountries(req:Request, res:Response)
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

    static async getOneCountry(req:Request, res:Response)
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

    static async createCountry(req: Request, res:Response)
    {
        try{
            const { name, phoneCode, abbreviation, symbol } = req.body;
            return await CountryService.create({});
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateCountry(req:Request, res:Response)
    {
        try{
            
        }catch(err){

        }
    }

    static async deleteCountry(req:Request, res:Response)
    {
        try{
            
        }catch(err){

        }
    }
}

export default CountriesController;