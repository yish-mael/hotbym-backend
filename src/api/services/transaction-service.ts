import { PaymentModel, TransactionModel, UserModel } from "../models";

interface ITransaction {
    userId: number,
    orderId: string,
    paymentId: number,
    reference: string
    status: string,
    amount: string,
}

class TransactionService{

    constructor(){}

    static async getAll()
    {
        return await TransactionModel.findAll({
            include: [UserModel, PaymentModel],
        });
    }


    static async getById(id: number)
    {
        return await TransactionModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        return await TransactionModel.findAll({ where: criteria });
    }


    static async create(values: ITransaction)
    {
        const { userId, orderId, paymentId, reference, status, amount } = values;

        // console.log(values);
        
        const [transaction, created] = await TransactionModel.findOrCreate({ where: { userId, orderId, paymentId, reference, status, amount }});
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