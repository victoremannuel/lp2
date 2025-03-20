abstract class Produto implements IProduto {
    nome: string;
    codigo: number;
    preco: number;
    quantidadeEmEstoque: number;
  
    constructor(nome: string, codigo: number, preco: number, quantidadeEmEstoque: number) {
      this.nome = nome;
      this.codigo = codigo;
      this.preco = preco;
      this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
  
    abstract adicionarEstoque(quantidade: number): void;
    abstract removerEstoque(quantidade: number): void;
    abstract calcularValorTotalEmEstoque(): number;
  }