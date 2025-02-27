"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor;
    }
    exibirDetalhes(titulo, anoPublicacao, autor) {
        console.log(`o livro ${titulo} foi escrito por ${autor} e publicado em ${anoPublicacao}`);
    }
}
exports.Livro = Livro;
