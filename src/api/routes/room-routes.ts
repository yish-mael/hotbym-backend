import { Router } from "express";
import RoomsController from "../controllers/rooms-controller";

const router = Router();

router.get("/", RoomsController.getAllRooms);
router.get("/:id", RoomsController.getOneRoom);
router.post("/search", RoomsController.getRoomSearch);
router.post("/", RoomsController.createRoom);
router.post("/images", RoomsController.getRoomImages);
router.put("/:id", RoomsController.updateRoom);
router.delete("/:id", RoomsController.deleteRoom);

export const room_routes = router;