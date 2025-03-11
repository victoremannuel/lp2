export class Autor {

    nome : string
    nacionalidade : string

    constructor(nome : string, nacionalidade : string) {
        this.nome = nome
        this.nacionalidade = nacionalidade
    }

    exibirDetalhes () : string {
        return `autor chama ${this.nome} e nasceu em ${this.nacionalidade}`
        
    }

}