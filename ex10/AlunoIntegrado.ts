import { Matriculado } from "./Matriculado";

import * as readlineSync from 'readline-sync';

export class AlunoIntegrado extends Matriculado {

    nome : string
    telefone : string

    constructor (
        matricula : string,
        nome : string,
        telefone : string
    ) {
        super(matricula,notas[3])
        this.nome = nome
        this.telefone = telefone
    }

    calcularMedia () : number {
        return (0.3 * notas[0] + 0.3 * notas[1] + 0.4 * notas[2]) / 3
    }

    receberNotas () {

    }

}