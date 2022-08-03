import { NotificationModel } from "../models";

interface INotification {
    userId: number,
    userNotifiedId: number,
    typeId: number,
    type: string,
    message: string,
    seenAt: string,
}

class NotificationService{

    constructor(){}

    static async getAll()
    {
        return await NotificationModel.findAll();
    }


    static async getById(id: number)
    {
        return await NotificationModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await NotificationModel.findAll({ where: { criteria } });
    }


    static async create(values: INotification)
    {
        const { userId, userNotifiedId, typeId, type, message, seenAt } = values;
        
        const [notification, created] = await NotificationModel.findOrCreate({ where: { userId, userNotifiedId, typeId, type, message, seenAt }});
        if(created == false) throw "Notification already exists.";
        return notification;
    }


    static async update(id: number, values: INotification)
    {
        return await NotificationModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const notification = await this.getById(id); 
        return await notification?.destroy();
    }

}

export default NotificationService;