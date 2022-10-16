"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const organisation_service_1 = __importDefault(require("../services/organisation-service"));
class OrganisationsController {
    constructor() { }
    static getUserOrganisations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userOrganisations = yield organisation_service_1.default.getWhere({ userId: parseInt(req.body.userId) });
                return res.status(200).json(userOrganisations);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    // static async getPropertyOrganisations(req: Request, res: Response)
    // {
    //     try{
    //         const propertyOrganisations =  await OrganisationService.getWhere({propertyId: parseInt(req.body.propertyId)});
    //         return res.status(200).json(propertyOrganisations);
    //     }catch(err){
    //         return res.status(500).json({
    //             error: err
    //         });
    //     }
    // }
    static getAllOrganisations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allOrganisations = yield organisation_service_1.default.getAll();
                return res.status(200).json(allOrganisations);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneOrganisation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneOrganisation = yield organisation_service_1.default.getById(id);
                return res.status(200).json(oneOrganisation);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createOrganisation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdOrganisation = yield organisation_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Organisation created successfully.",
                    data: createdOrganisation
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateOrganisation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedOrganisation = yield organisation_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Organisation updated successfully.",
                    data: updatedOrganisation
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteOrganisation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedOrganisation = yield organisation_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Organisation deleted successfully.",
                    data: deletedOrganisation
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
}
exports.default = OrganisationsController;
