import { Router } from "express";
import RolesController from "../controllers/roles-controller";

const router = Router();

router.get("/", RolesController.getAllRoles);
router.get("/:id", RolesController.getOneRole);
router.post("/permissions", RolesController.addPermissionsToRole);
router.delete("/permissions", RolesController.removePermissionsFromRole);
router.post("/", RolesController.createRole);
router.put("/:id", RolesController.updateRole);
router.delete("/:id", RolesController.deleteRole);

export const role_routes = router;