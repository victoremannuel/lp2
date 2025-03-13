"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPerecivel = void 0;
const Produto_1 = require("./Produto");
class ProdutoPerecivel extends Produto_1.Produto {
    constructor(nome, codigo, preco, quantidadeEmEstoque, dataValidade) {
        super(nome, codigo, preco, quantidadeEmEstoque);
        this.dataValidade = dataValidade;
    }
    adicionarEstoque(quantidade) {
        this.quantidadeEmEstoque + quantidade;
    }
    removerEstoque(quantidade) {
        this.quantidadeEmEstoque - quantidade;
    }
    calcularValorTotalEmEstoque() {
        return this.quantidadeEmEstoque;
    }
    detalhesDoProduto() {
        return `
        Produto: ${this.nome} (Perecivel)\n
        Código: ${this.codigo}\n
        Preço: ${this.preco}\n
        Quantidade em estoque: ${this.quantidadeEmEstoque}
        Valor total em estoque: ${this.quantidadeEmEstoque}
        `;
    }
}
exports.ProdutoPerecivel = ProdutoPerecivel;
