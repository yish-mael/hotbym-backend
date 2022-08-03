import { Request, Response } from "express";
import NotificationService from "../services/notification-service";

class NotificationsController {

    constructor() {}

    static async getAllNotifications(req: Request, res: Response)
    {
        try{
            const allNotifications =  await NotificationService.getAll();
            return res.status(200).json(allNotifications);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneNotification(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneNotification = await NotificationService.getById(id);
            return res.status(200).json(oneNotification);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createNotification(req: Request, res: Response)
    {
        try{
            const createdNotification = await NotificationService.create(req.body);
            return res.status(200).json({
                message: "Notification created successfully.",
                data: createdNotification
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateNotification(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedNotification = await NotificationService.update(id, req.body);
            return res.status(200).json({
                message: "Notification updated successfully.",
                data: updatedNotification
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteNotification(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedNotification = await NotificationService.delete(id);
            return res.status(200).json({
                message: "Notification deleted successfully.",
                data: deletedNotification
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default NotificationsController;