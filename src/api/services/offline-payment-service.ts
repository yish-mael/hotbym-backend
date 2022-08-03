import { OfflinePaymentModel } from "../models";

interface IOfflinePayment {
    title: string,
    image: string,
    status: string,
    bankName: string,
    accountName: string,
    accountNumber: string,
    iban: string,
    sort: string,
    swift: string,
}

class OfflinePaymentService{

    constructor(){}

    static async getAll()
    {
        return await OfflinePaymentModel.findAll();
    }


    static async getById(id: number)
    {
        return await OfflinePaymentModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await OfflinePaymentModel.findAll({ where: { criteria } });
    }


    static async create(values: IOfflinePayment)
    {
        const { title, image, status, bankName, accountName, accountNumber, iban, sort, swift } = values;
        
        const [offlinePayment, created] = await OfflinePaymentModel.findOrCreate({ where: { title, image, status, bankName, accountName, accountNumber, iban, sort, swift }});
        if(created == false) throw "Offline Payment already exists.";
        return offlinePayment;
    }


    static async update(id: number, values: IOfflinePayment)
    {
        return await OfflinePaymentModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const offlinePayment = await this.getById(id); 
        return await offlinePayment?.destroy();
    }

}

export default OfflinePaymentService;