import { Produto } from "../ex08/Produto";

class ProdutoPerecivel extends Produto {
    dataValidade: Date;
  
    constructor(nome: string, codigo: number, preco: number, quantidadeEmEstoque: number, dataValidade: Date) {
      super(nome, codigo, preco, quantidadeEmEstoque);
      this.dataValidade = dataValidade;
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
  