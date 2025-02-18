abstract class Notificador {
    abstract enviarMensagem(mensagem: string): void;
}

class NotificadorEmail extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class NotificadorSMS extends Notificador {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

type NotificadorTipo = NotificadorEmail | NotificadorSMS;

const notificadores: NotificadorTipo[] = [
    new NotificadorEmail(),
    new NotificadorSMS()
];

notificadores.forEach(notificador => {
    notificador.enviarMensagem("Sucesso!");
});
