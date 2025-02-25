"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorSMS = void 0;
const Notificador_1 = __importDefault(require("./Notificador"));
class NotificadorSMS extends Notificador_1.default {
    enviarMensagem(mensagem) {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}
exports.NotificadorSMS = NotificadorSMS;
