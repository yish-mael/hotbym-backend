import { Request, Response } from "express";
import OfflinePaymentService from "../services/offline-payment-service";

class OfflinePaymentsController {

    constructor() {}

    static async getAllOfflinePayments(req: Request, res: Response)
    {
        try{
            const allOfflinePayments =  await OfflinePaymentService.getAll();
            return res.status(200).json(allOfflinePayments);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneOfflinePayment(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneOfflinePayment = await OfflinePaymentService.getById(id);
            return res.status(200).json(oneOfflinePayment);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createOfflinePayment(req: Request, res: Response)
    {
        try{
            const createdOfflinePayment = await OfflinePaymentService.create(req.body);
            return res.status(200).json({
                message: "Offline Payment created successfully.",
                data: createdOfflinePayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateOfflinePayment(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedOfflinePayment = await OfflinePaymentService.update(id, req.body);
            return res.status(200).json({
                message: "Offline Payment updated successfully.",
                data: updatedOfflinePayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteOfflinePayment(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedOfflinePayment = await OfflinePaymentService.delete(id);
            return res.status(200).json({
                message: "Offline Payment deleted successfully.",
                data: deletedOfflinePayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default OfflinePaymentsController;