"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificadorEmail_1 = require("./NotificadorEmail");
const NotificadorSMS_1 = require("./NotificadorSMS");
const notificadores = [
    new NotificadorEmail_1.NotificadorEmail(),
    new NotificadorSMS_1.NotificadorSMS()
];
notificadores.forEach(notificador => {
    notificador.enviarMensagem("Sucesso!");
});
