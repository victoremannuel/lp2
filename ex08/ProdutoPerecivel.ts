import { Produto } from "./Produto";

export class ProdutoPerecivel extends Produto {
    dataValidade : Date

    constructor (
        nome:string,
        codigo:number,
        preco:number,
        quantidadeEmEstoque:number,
        dataValidade : Date
    ) {
        super(nome, codigo, preco, quantidadeEmEstoque)
        this.dataValidade = dataValidade
    }

    adicionarEstoque (quantidade:number) : void {
        this.quantidadeEmEstoque + quantidade
    }

    removerEstoque (quantidade:number) : void {
        this.quantidadeEmEstoque - quantidade
    }

    calcularValorTotalEmEstoque () : number {
        return this.quantidadeEmEstoque
    }

    detalhesDoProduto () : string {
        return `
        Produto: ${this.nome} (Perecivel)\n
        Código: ${this.codigo}\n
        Preço: ${this.preco}\n
        Quantidade em estoque: ${this.quantidadeEmEstoque}
        Valor total em estoque: ${this.quantidadeEmEstoque}
        `
    }
}