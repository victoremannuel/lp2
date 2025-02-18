import { NotificadorEmail } from "./NotificadorEmail";
import { NotificadorSMS } from "./NotificadorSMS";

type NotificadorTipo = NotificadorEmail | NotificadorSMS;

const notificadores: NotificadorTipo[] = [
    new NotificadorEmail(),
    new NotificadorSMS()
];

notificadores.forEach(notificador => {
    notificador.enviarMensagem("Sucesso!");
});