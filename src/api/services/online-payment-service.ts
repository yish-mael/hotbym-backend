import { OnlinePaymentModel } from "../models";

interface IOnlinePayment {
    title: number,
    status: string,
    image: string,
    url: string,
    secretKey: string,
    publicKey: string,
}

class OnlinePaymentService{

    constructor(){}

    static async getAll()
    {
        return await OnlinePaymentModel.findAll();
    }


    static async getById(id: number)
    {
        return await OnlinePaymentModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await OnlinePaymentModel.findAll({ where: { criteria } });
    }


    static async create(values: IOnlinePayment)
    {
        const { title, status, image, url, secretKey, publicKey } = values;
        
        const [onlinePayment, created] = await OnlinePaymentModel.findOrCreate({ where: { title, status, image, url, secretKey, publicKey }});
        if(created == false) throw "Online Payment already exists.";
        return onlinePayment;
    }


    static async update(id: number, values: IOnlinePayment)
    {
        return await OnlinePaymentModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const onlinePayment = await this.getById(id); 
        return await onlinePayment?.destroy();
    }

}

export default OnlinePaymentService;