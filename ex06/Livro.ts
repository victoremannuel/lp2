import { Autor } from "./Autor"

export class Livro {
    
    titulo : string
    anoPublicacao : number
    autor : Autor

    constructor(titulo : string, anoPublicacao : number, autor : Autor) {
        this.titulo = titulo
        this.anoPublicacao = anoPublicacao
        this.autor = autor
    }

    exibirDetalhes (titulo : string, anoPublicacao : number, autor : Autor) {
        console.log(`o livro ${titulo} foi escrito por ${autor} e publicado em ${anoPublicacao}`);
        
    }
    
}