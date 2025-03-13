"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(livro, dataEmprestimo, dataDevolucao) {
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
    exibirDetalhes() {
        return `o livro ${this.livro.titulo} foi emprestado em ${this.dataEmprestimo} e devolvido em ${this.dataDevolucao}.`;
    }
}
exports.Emprestimo = Emprestimo;
