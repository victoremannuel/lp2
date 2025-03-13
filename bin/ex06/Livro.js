"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor;
    }
    exibirDetalhes() {
        return `o livro ${this.titulo} foi escrito por ${this.autor} e publicado em ${this.anoPublicacao}`;
    }
}
exports.Livro = Livro;
