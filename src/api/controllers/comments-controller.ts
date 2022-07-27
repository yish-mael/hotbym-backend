import { Request, Response } from "express";
import CommentService from "../services/comment-service";

class CommentsController {

    constructor() {}

    static async getAllComments(req: Request, res: Response)
    {
        try{
            const allComments =  await CommentService.getAll();
            return res.status(200).json(allComments);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneComment(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneComment = await CommentService.getById(id);
            return res.status(200).json(oneComment);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createComment(req: Request, res: Response)
    {
        try{
            const createdComment = await CommentService.create(req.body);
            return res.status(200).json({
                message: "Comment created successfully.",
                data: createdComment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateComment(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedComment = await CommentService.update(id, req.body);
            return res.status(200).json({
                message: "Comment updated successfully.",
                data: updatedComment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteComment(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedComment = await CommentService.delete(id);
            return res.status(200).json({
                message: "Comment deleted successfully.",
                data: deletedComment
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default CommentsController;