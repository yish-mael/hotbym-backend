import { Request, Response } from "express";
import RoomService from "../services/room-service";
import UploadService from "../services/upload-service";

class RoomsController {

    constructor() {}

    static async getAllRooms(req: Request, res: Response)
    {
        try{
            const allRooms =  await RoomService.getAll();
            return res.status(200).json(allRooms);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneRoom(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneRoom = await RoomService.getById(id);
            return res.status(200).json(oneRoom);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
    
    static async getRoomSearch(req: Request, res: Response)
    {
        try{
            const roomSearch = await RoomService.getWhereSearch(req.body);
            return res.status(200).json(roomSearch);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getRoomImages(req: Request, res: Response)
    {
        try{
            const allRoomImages =  await UploadService.getWhere({type: "room", typeId: req.body.roomId});
            return res.status(200).json(allRoomImages);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createRoom(req: Request, res: Response)
    {
        try{
            const createdRoom = await RoomService.create(req.body);
            return res.status(200).json({
                message: "Room created successfully.",
                data: createdRoom
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateRoom(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedRoom = await RoomService.update(id, req.body);
            return res.status(200).json({
                message: "Room updated successfully.",
                data: updatedRoom
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteRoom(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedRoom = await RoomService.delete(id);
            return res.status(200).json({
                message: "Room deleted successfully.",
                data: deletedRoom
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default RoomsController;