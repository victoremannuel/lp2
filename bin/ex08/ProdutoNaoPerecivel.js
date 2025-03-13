"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoNaoPerecivel = void 0;
const Produto_1 = require("./Produto");
class ProdutoNaoPerecivel extends Produto_1.Produto {
    constructor(nome, codigo, preco, quantidadeEmEstoque) {
        super(nome, codigo, preco, quantidadeEmEstoque);
    }
    adicionarEstoque(quantidade) {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + quantidade;
    }
    removerEstoque(quantidade) {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque - quantidade;
    }
    calcularValorTotalEmEstoque() {
        return this.quantidadeEmEstoque;
    }
    detalhesDoProduto() {
        console.log(`
        Produto: ${this.nome} (Não Perecivel)\n
        Código: ${this.codigo}\n
        Preço: ${this.preco}\n
        Quantidade em estoque: ${this.quantidadeEmEstoque}\n
        Valor total em estoque: ${this.quantidadeEmEstoque}\n
        `);
    }
}
exports.ProdutoNaoPerecivel = ProdutoNaoPerecivel;
