"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(livro, dataEmprestimo, dataDevolucao) {
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
    exibirDetalhes(livro, dataDevolucao, dataEmprestimo) {
        console.log(`o livro ${livro.titulo} foi emprestado em ${dataEmprestimo} e devolvido em ${dataDevolucao}.`);
    }
}
exports.Emprestimo = Emprestimo;
