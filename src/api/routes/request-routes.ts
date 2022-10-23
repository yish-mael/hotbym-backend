import { Router } from "express";
import RequestsController from "../controllers/requests-controller";

const router = Router();

/**
 * @openapi
 * /amenities:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/", RequestsController.sendRequests);


export const request_routes = router;