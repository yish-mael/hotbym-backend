import { Router } from "express";
import PermissionsController from "../controllers/permissions-controller";

const router = Router();

router.get("/", PermissionsController.getAllPermissions);
router.get("/:id", PermissionsController.getOnePermission);
router.post("/", PermissionsController.createPermission);
router.put("/:id", PermissionsController.updatePermission);
router.delete("/:id", PermissionsController.deletePermission);

export const permission_routes = router;