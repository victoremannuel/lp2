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

    }

    removerEstoque (quantidade:number) : void {

    }

    calcularValorTotalEmEstoque () : number {
        return this.quantidadeEmEstoque
    }
}