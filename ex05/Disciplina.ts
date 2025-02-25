import { Estudante } from "./Estudante";

export class Disciplina {

    nome : string
    estudante: Estudante[] = []

    constructor(nome : string) {
        this.nome = nome
    }

    adicionar (estudante : Estudante) {this.estudante.push(estudante)}
    
}