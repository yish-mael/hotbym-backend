import { Request, Response } from "express";
import TransactionService from "../services/transaction-service";

class TransactionsController {

    constructor() {}

    static async getAllTransactions(req: Request, res: Response)
    {
        try{
            const allTransaction =  await TransactionService.getAll();
            return res.status(200).json(allTransaction);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneTransaction(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneTransaction = await TransactionService.getById(id);
            return res.status(200).json(oneTransaction);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createTransaction(req: Request, res: Response)
    {
        try{
            const createdTransaction = await TransactionService.create(req.body);
            return res.status(200).json({
                message: "Transaction created successfully.",
                data: createdTransaction
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateTransaction(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedTransaction = await TransactionService.update(id, req.body);
            return res.status(200).json({
                message: "Transaction updated successfully.",
                data: updatedTransaction
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteTransaction(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedTransaction = await TransactionService.delete(id);
            return res.status(200).json({
                message: "Transaction deleted successfully.",
                data: deletedTransaction
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default TransactionsController;