"use strict";
class Notificador {
}
class NotificadorEmail extends Notificador {
    enviarMensagem(mensagem) {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}
class NotificadorSMS extends Notificador {
    enviarMensagem(mensagem) {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}
const notificadores = [
    new NotificadorEmail(),
    new NotificadorSMS()
];
notificadores.forEach(notificador => {
    notificador.enviarMensagem("Sucesso!");
});
