import { PaymentModel } from "../models";

interface IPayment {
    title: string,
    image: string,
    status: string,
    type: string,
    bankName: string,
    accountName: string,
    accountNumber: string,
    iban: string,
    sort: string,
    swift: string,
    url: string,
    secretKey: string,
    publicKey: string,
}

class PaymentService{

    constructor(){}

    static async getAll()
    {
        return await PaymentModel.findAll();
    }


    static async getById(id: number)
    {
        return await PaymentModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await PaymentModel.findAll({ where: { criteria } });
    }


    static async create(values: IPayment)
    {
        const { title, image, status, type, bankName, accountName, accountNumber, iban, sort, swift, url, secretKey, publicKey } = values;
        
        const [payment, created] = await PaymentModel.findOrCreate({ where: { title, image, status, type, bankName, accountName, accountNumber, iban, sort, swift, url, secretKey, publicKey }});
        if(created == false) throw "Payment method already exists.";
        return payment;
    }


    static async update(id: number, values: IPayment)
    {
        return await PaymentModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const payment = await this.getById(id); 
        return await payment?.destroy();
    }

}

export default PaymentService;