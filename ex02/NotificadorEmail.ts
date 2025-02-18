import Notificador from "./Notificador";

export class NotificadorEmail extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}