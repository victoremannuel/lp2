export class Autor {

    nome : string
    nacionalidade : string

    constructor(nome : string, nacionalidade : string) {
        this.nome = nome
        this.nacionalidade = nacionalidade
    }

    exibirDetalhes (nome : string, nacionalidade : string) {
        console.log(`autor chama ${nome} e nasceu em ${nacionalidade}`);
        
    }

}