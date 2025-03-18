import * as readlineSync from 'readline-sync';
import { Matriculado } from './Matriculado';

export class AlunoSuperior extends Matriculado {
    constructor(matricula: string) {
        super(matricula, 2);
    }

    calcularMedia(): number {
        return (0.4 * this.notas[0] + 0.6 * this.notas[1]);
    }

    receberNotas(): void {
        try {
            let indice = readlineSync.questionInt('Digite o índice da nota (0 ou 1): ');
            if (indice < 0 || indice > 1) {
                throw new Error('Índice inválido! Insira um valor entre 0 e 1.');
            }
            let nota = readlineSync.questionFloat('Digite a nota: ');
            if (nota < 0) {
                throw new Error('Nota inválida! Insira um valor positivo.');
            }
            this.notas[indice] = nota;
            console.log('Nota registrada com sucesso!');
        } catch (error: any) {
            console.error(`Erro: ${error.message}`);
        }
    }
}
