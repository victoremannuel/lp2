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

    exibirDetalhes (livro : Livro, dataDevolucao : Date, dataEmprestimo : Date) {
        console.log(`o livro ${livro.titulo} foi emprestado em ${dataEmprestimo} e devolvido em ${dataDevolucao}.`)
    }
}