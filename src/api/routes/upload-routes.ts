import { Router } from "express";
import UploadsController from "../controllers/uploads-controller";

const router = Router();

router.get("/", UploadsController.getAllUploads);
router.get("/:id", UploadsController.getOneUpload);
router.post("/", UploadsController.createUpload);
router.put("/:id", UploadsController.updateUpload);
router.delete("/:id", UploadsController.deleteUpload);

export const upload_routes = router;