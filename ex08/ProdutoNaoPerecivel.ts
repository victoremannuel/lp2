import { Produto } from "./Produto";

export class ProdutoNaoPerecivel extends Produto {

    constructor (
        nome:string,
        codigo:number,
        preco:number,
        quantidadeEmEstoque:number
    ) {
        this.nome = nome
        this.codigo = codigo
        this.preco = preco
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

    adicionarEstoque (quantidade:number) : void {

    }

    removerEstoque (quantidade:number) : void {

    }

    calcularValorTotalEmEstoque () : number {
        return this.quantidadeEmEstoque
    }
}