import Notificador from "./Notificador";

class NotificadorEmail extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}