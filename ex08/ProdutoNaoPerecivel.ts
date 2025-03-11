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

    }

    removerEstoque (quantidade:number) : void {

    }

    calcularValorTotalEmEstoque () : number {
        return this.quantidadeEmEstoque
    }
}