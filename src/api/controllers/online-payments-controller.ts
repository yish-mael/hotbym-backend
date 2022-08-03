import { Request, Response } from "express";
import OnlinePaymentService from "../services/online-payment-service";

class OnlinePaymentsController {

    constructor() {}

    static async getAllOnlinePayments(req: Request, res: Response)
    {
        try{
            const allOnlinePayments =  await OnlinePaymentService.getAll();
            return res.status(200).json(allOnlinePayments);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneOnlinePayment(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneOnlinePayment = await OnlinePaymentService.getById(id);
            return res.status(200).json(oneOnlinePayment);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createOnlinePayment(req: Request, res: Response)
    {
        try{
            const createdOnlinePayment = await OnlinePaymentService.create(req.body);
            return res.status(200).json({
                message: "Online Payment created successfully.",
                data: createdOnlinePayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateOnlinePayment(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedOnlinePayment = await OnlinePaymentService.update(id, req.body);
            return res.status(200).json({
                message: "Online Payment updated successfully.",
                data: updatedOnlinePayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteOnlinePayment(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedOnlinePayment = await OnlinePaymentService.delete(id);
            return res.status(200).json({
                message: "Online Payment deleted successfully.",
                data: deletedOnlinePayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default OnlinePaymentsController;