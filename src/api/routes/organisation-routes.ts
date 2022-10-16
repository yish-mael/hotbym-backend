import { Router } from "express";
import OrganisationsController from "../controllers/organisations-controller";

const router = Router();

router.get("/", OrganisationsController.getAllOrganisations);
router.get("/:id", OrganisationsController.getOneOrganisation);
router.post("/", OrganisationsController.createOrganisation);
router.put("/:id", OrganisationsController.updateOrganisation);
router.delete("/:id", OrganisationsController.deleteOrganisation);

export const organisations_routes = router;