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
const email_messages_1 = require("../templates/email-messages");
const mail_service_1 = __importDefault(require("./mail-service"));
class ContactService {
    constructor() { }
    static send(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = (0, email_messages_1.contactEmail)(values);
            // send email with password reset link.
            return yield mail_service_1.default.mailer({ subject: "Hotbym Contact Form", recipient: 'info@hotbym.com', message });
        });
    }
}
exports.default = ContactService;
