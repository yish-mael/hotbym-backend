import { Request, Response } from "express";
import CategoryService from "../services/category-service";
import UploadService from "../services/upload-service";

class CategoriesController {

    constructor() {}

    static async getAllCategories(req: Request, res: Response)
    {
        try{
            const allCategories =  await CategoryService.getAll();
            return res.status(200).json(allCategories);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneCategory(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneCategory = await CategoryService.getById(id);
            return res.status(200).json(oneCategory);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getCategoryImages(req: Request, res: Response)
    {
        try{
            //console.log(req.body.propertyId);
            const allCategoryImages =  await UploadService.getWhere({type: "category", typeId: req.body.categoryId});
            return res.status(200).json(allCategoryImages);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createCategory(req: Request, res: Response)
    {
        try{
            const createdCategory = await CategoryService.create(req.body);
            return res.status(200).json({
                message: "Category created successfully.",
                data: createdCategory
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateCategory(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedCategory = await CategoryService.update(id, req.body);
            return res.status(200).json({
                message: "Category updated successfully.",
                data: updatedCategory
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteCategory(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedCategory = await CategoryService.delete(id);
            return res.status(200).json({
                message: "Category deleted successfully.",
                data: deletedCategory
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default CategoriesController;