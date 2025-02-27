import { Autor } from "./Autor";
import { Emprestimo } from "./Emprestimo";
import { Livro } from "./Livro";

function main(): void {
    const autor1 = new Autor("fulano","brasileiro")
    const autor2 = new Autor("siclano", "argentino")

    const livro1 = new Livro("titulo 1", 2001, autor1)
    const livro2 = new Livro("titulo 2", 2002, autor2)
    const livro3 = new Livro("titulo 3", 2003, autor2)

    const emprestimo1 = new Emprestimo(livro1, new Date(), new Date())
    const emprestimo2 = new Emprestimo(livro2, new Date(), new Date())
    
    emprestimo1.exibirDetalhes(livro1, new Date(),new Date())
    emprestimo2.exibirDetalhes(livro2, new Date(),new Date())
}

// Executa o programa
main();