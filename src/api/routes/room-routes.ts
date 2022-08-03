import { Router } from "express";
import RoomsController from "../controllers/rooms-controller";

const router = Router();

router.get("/", RoomsController.getAllRooms);
router.get("/:id", RoomsController.getOneRoom);
router.post("/", RoomsController.createRoom);
router.put("/:id", RoomsController.updateRoom);
router.delete("/:id", RoomsController.deleteRoom);

export const room_routes = router;