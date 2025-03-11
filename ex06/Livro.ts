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

    exibirDetalhes () : string {
        return `o livro ${this.titulo} foi escrito por ${this.autor} e publicado em ${this.anoPublicacao}`
        
    }
    
}