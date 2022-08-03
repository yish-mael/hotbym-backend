import { Router } from "express";
import RolesController from "../controllers/roles-controller";
import { hasPermission } from "../middlewares/authorization-middleware";
import { authenticate } from "../middlewares/authentication-middleware";

const router = Router();

router.get("/", hasPermission(''), RolesController.getAllRoles);
router.get("/:id", RolesController.getOneRole);
router.post("/permissions", RolesController.addPermissionsToRole);
router.delete("/permissions", RolesController.removePermissionsFromRole);
router.post("/", RolesController.createRole);
router.put("/:id", RolesController.updateRole);
router.delete("/:id", RolesController.deleteRole);

export const role_routes = router;