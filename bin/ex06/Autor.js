"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }
    exibirDetalhes() {
        return `autor chama ${this.nome} e nasceu em ${this.nacionalidade}`;
    }
}
exports.Autor = Autor;
