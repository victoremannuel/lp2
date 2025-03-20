import { Produto } from "../ex08/Produto";

class ProdutoNaoPerecivel extends Produto {
    constructor(nome: string, codigo: number, preco: number, quantidadeEmEstoque: number) {
      super(nome, codigo, preco, quantidadeEmEstoque);
    }
  
    adicionarEstoque(quantidade: number): void {
      this.quantidadeEmEstoque += quantidade;
    }
  
    removerEstoque(quantidade: number): void {
      if (quantidade <= this.quantidadeEmEstoque) {
        this.quantidadeEmEstoque -= quantidade;
      } else {
        console.log("Estoque insuficiente.");
      }
    }
  
    calcularValorTotalEmEstoque(): number {
      return this.preco * this.quantidadeEmEstoque;
    }
  }
  