"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Autor_1 = require("./Autor");
const Emprestimo_1 = require("./Emprestimo");
const Livro_1 = require("./Livro");
function main() {
    const autor1 = new Autor_1.Autor("fulano", "brasileiro");
    const autor2 = new Autor_1.Autor("siclano", "argentino");
    const livro1 = new Livro_1.Livro("titulo 1", 2001, autor1);
    const livro2 = new Livro_1.Livro("titulo 2", 2002, autor2);
    const livro3 = new Livro_1.Livro("titulo 3", 2003, autor2);
    const emprestimo1 = new Emprestimo_1.Emprestimo(livro1, new Date(), new Date());
    const emprestimo2 = new Emprestimo_1.Emprestimo(livro2, new Date(), new Date());
    emprestimo1.exibirDetalhes(livro1, new Date(), new Date());
    emprestimo2.exibirDetalhes(livro2, new Date(), new Date());
}
// Executa o programa
main();
