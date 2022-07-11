import { Router } from "express";
import UsersController from "../controllers/users-controller";

const router = Router();

router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getOneUser);
router.post("/", UsersController.createUser);
router.put("/:id", UsersController.updateUser);
router.delete("/:id", UsersController.deleteUser);

export const user_routes = router;