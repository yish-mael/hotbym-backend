import { Router } from "express";
import StatesController from "../controllers/states-controller";

const router = Router();

router.get("/", StatesController.getAllStates);
router.get("/country/:id", StatesController.getCountryStates);
router.get("/:id", StatesController.getOneState);
router.post("/images", StatesController.getStateImages);
router.post("/", StatesController.createState);
router.put("/:id", StatesController.updateState);
router.delete("/:id", StatesController.deleteState);

export const state_routes = router;