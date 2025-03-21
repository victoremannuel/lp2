import { Livro } from "./Livro";

export class Emprestimo {
    livro : Livro
    dataEmprestimo : Date
    dataDevolucao : Date

    constructor(livro : Livro, dataEmprestimo : Date, dataDevolucao : Date) {
        this.livro = livro
        this.dataEmprestimo = dataEmprestimo
        this.dataDevolucao = dataDevolucao
    }

    exibirDetalhes () : string {
        return `o livro ${this.livro.titulo} foi emprestado em ${this.dataEmprestimo} e devolvido em ${this.dataDevolucao}.`
    }
}