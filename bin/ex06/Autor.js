"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }
    exibirDetalhes(nome, nacionalidade) {
        console.log(`autor chama ${nome} e nasceu em ${nacionalidade}`);
    }
}
exports.Autor = Autor;
