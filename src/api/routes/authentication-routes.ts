import { Router } from "express";
import AuthenticationController from "../controllers/authentication-controller";

const router = Router();
/**
 * @openapi
 * /auth:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/sign-up", AuthenticationController.signUp);
router.post("/sign-in", AuthenticationController.signIn);
router.delete("/sign-out", AuthenticationController.logout);
router.post("/forgot", AuthenticationController.forgotPassword);
router.post("/token", AuthenticationController.refreshToken);
router.post("/reset/:token", AuthenticationController.resetPassword);

export const authentication_routes = router;