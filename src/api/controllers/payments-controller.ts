import { Request, Response } from "express";
import PaymentService from "../services/payment-service";

class PaymentsController {

    constructor() {}

    static async getAllPayments(req: Request, res: Response)
    {
        try{
            const allPayments =  await PaymentService.getAll();
            return res.status(200).json(allPayments);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOnePayment(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const onePayment = await PaymentService.getById(id);
            return res.status(200).json(onePayment);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createPayment(req: Request, res: Response)
    {
        console.log(req.body);
        try{
            const createdPayment = await PaymentService.create(req.body);
            return res.status(200).json({
                message: "Payment created successfully.",
                data: createdPayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updatePayment(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedPayment = await PaymentService.update(id, req.body);
            return res.status(200).json({
                message: "Payment updated successfully.",
                data: updatedPayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deletePayment(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedPayment = await PaymentService.delete(id);
            return res.status(200).json({
                message: "Payment deleted successfully.",
                data: deletedPayment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default PaymentsController;