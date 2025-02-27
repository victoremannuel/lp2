"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
class Disciplina {
    constructor(nome) {
        this.estudante = [];
        this.nome = nome;
    }
    adicionar(estudante) { this.estudante.push(estudante); }
}
exports.Disciplina = Disciplina;
