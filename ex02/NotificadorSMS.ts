import Notificador from "./Notificador";

export class NotificadorSMS extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}