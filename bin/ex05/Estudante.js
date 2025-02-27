"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
class Estudante {
    constructor(nome) {
        this.disciplina = [];
        this.nome = nome;
    }
    adicionar(disciplina) { this.disciplina.push(disciplina); }
}
exports.Estudante = Estudante;
