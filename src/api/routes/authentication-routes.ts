import { Router } from "express";
import AuthenticationController from "../controllers/authentication-controller";

const router = Router();

router.post("/sign-up", AuthenticationController.signUp);
router.post("/sign-in", AuthenticationController.signIn);
router.post("/forgot", AuthenticationController.forgotPassword);
router.post("/reset/:token", AuthenticationController.resetPassword);

export const authentication_routes = router;