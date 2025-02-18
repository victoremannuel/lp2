import Notificador from "./Notificador";

class NotificadorSMS extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}