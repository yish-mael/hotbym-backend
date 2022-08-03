import { TransactionModel } from "../models";

interface ITransaction {
    userId: number,
    bookingId: number,
    offlinePaymentId: number,
    onlinePaymentId: number,
    status: string,
    amount: string,
}

class TransactionService{

    constructor(){}

    static async getAll()
    {
        return await TransactionModel.findAll();
    }


    static async getById(id: number)
    {
        return await TransactionModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await TransactionModel.findAll({ where: { criteria } });
    }


    static async create(values: ITransaction)
    {
        const { userId, bookingId, offlinePaymentId, onlinePaymentId, status, amount } = values;
        
        const [transaction, created] = await TransactionModel.findOrCreate({ where: { userId, bookingId, offlinePaymentId, onlinePaymentId, status, amount }});
        if(created == false) throw "Transaction already exists.";
        return transaction;
    }


    static async update(id: number, values: ITransaction)
    {
        return await TransactionModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const transaction = await this.getById(id); 
        return await transaction?.destroy();
    }

}

export default TransactionService;