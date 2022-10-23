import { Router } from "express";
import ContactsController from "../controllers/contacts-controller";

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
router.post("/", ContactsController.sendContacts);


export const contact_routes = router;