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
const state_service_1 = __importDefault(require("../services/state-service"));
const upload_service_1 = __importDefault(require("../services/upload-service"));
class StatesController {
    constructor() { }
    static getAllStates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allStates = yield state_service_1.default.getAll();
                return res.status(200).json(allStates);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getCountryStates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allStates = yield state_service_1.default.getCountryStates(parseInt(req.params.id));
                return res.status(200).json(allStates);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneState = yield state_service_1.default.getById(id);
                return res.status(200).json(oneState);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getStateImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(req.body.propertyId);
                const allStateImages = yield upload_service_1.default.getWhere({ type: "state", typeId: req.body.stateId });
                return res.status(200).json(allStateImages);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdState = yield state_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "State created successfully.",
                    data: createdState
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedState = yield state_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "State updated successfully.",
                    data: updatedState
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedState = yield state_service_1.default.delete(id);
                return res.status(200).json({
                    message: "State deleted successfully.",
                    data: deletedState
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
exports.default = StatesController;
