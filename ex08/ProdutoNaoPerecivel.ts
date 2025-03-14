import { Produto } from "./Produto";

export class ProdutoNaoPerecivel extends Produto {

    constructor (
        nome:string,
        codigo:number,
        preco:number,
        quantidadeEmEstoque:number
    ) {
        super(nome, codigo, preco, quantidadeEmEstoque)
    }

    adicionarEstoque (quantidade:number) : void {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + quantidade
    }

    removerEstoque (quantidade:number) : void {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque - quantidade
    }

    calcularValorTotalEmEstoque () : number {
        return this.quantidadeEmEstoque
    }

    detalhesDoProduto () : void {
        console.log(
        `
        Produto: ${this.nome} (Não Perecivel)\n
        Código: ${this.codigo}\n
        Preço: ${this.preco}\n
        Quantidade em estoque: ${this.quantidadeEmEstoque}\n
        Valor total em estoque: ${this.quantidadeEmEstoque}\n
        `)
    }
}