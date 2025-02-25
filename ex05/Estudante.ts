import { Disciplina } from "./Disciplina";

export class Estudante {

    nome : string
    disciplina : Disciplina[] = []

    constructor(nome : string) {
        this.nome = nome
    }

    adicionar (disciplina : Disciplina) {this.disciplina.push(disciplina)}
    
}