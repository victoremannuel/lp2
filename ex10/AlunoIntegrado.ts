import * as readlineSync from 'readline-sync';
import { Matriculado } from './Matriculado';

export class AlunoIntegrado extends Matriculado {
    private nome: string;
    private telefone: string;

    constructor(matricula: string, nome: string, telefone: string) {
        super(matricula, 3);
        this.nome = nome;
        this.telefone = telefone;
    }

    calcularMedia(): number {
        return (0.3 * this.notas[0] + 0.3 * this.notas[1] + 0.4 * this.notas[2]);
    }

    receberNotas(): void {
        try {
            let indice = readlineSync.questionInt('Digite o índice da nota (0, 1 ou 2): ');
            if (indice < 0 || indice > 2) {
                throw new Error('Índice inválido! Insira um valor entre 0 e 2.');
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