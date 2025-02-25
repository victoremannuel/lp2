"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorEmail = void 0;
const Notificador_1 = __importDefault(require("./Notificador"));
class NotificadorEmail extends Notificador_1.default {
    enviarMensagem(mensagem) {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}
exports.NotificadorEmail = NotificadorEmail;
