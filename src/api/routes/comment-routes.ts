import { Router } from "express";
import CommentsController from "../controllers/comments-controller";

const router = Router();

router.get("/", CommentsController.getAllComments);
router.get("/:id", CommentsController.getOneComment);
router.post("/", CommentsController.createComment);
router.put("/:id", CommentsController.updateComment);
router.delete("/:id", CommentsController.deleteComment);

export const comments_routes = router;