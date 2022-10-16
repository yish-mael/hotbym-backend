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
const comment_service_1 = __importDefault(require("../services/comment-service"));
class CommentsController {
    constructor() { }
    static getAllComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allComments = yield comment_service_1.default.getAll();
                return res.status(200).json(allComments);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneComment = yield comment_service_1.default.getById(id);
                return res.status(200).json(oneComment);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdComment = yield comment_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Comment created successfully.",
                    data: createdComment
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedComment = yield comment_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Comment updated successfully.",
                    data: updatedComment
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedComment = yield comment_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Comment deleted successfully.",
                    data: deletedComment
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
exports.default = CommentsController;
