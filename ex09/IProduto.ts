interface IProduto {
    adicionarEstoque(quantidade: number): void;
    removerEstoque(quantidade: number): void;
    calcularValorTotalEmEstoque(): number;
  }