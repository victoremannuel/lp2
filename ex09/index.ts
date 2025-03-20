import { Produto } from "../ex08/Produto";
import { ProdutoNaoPerecivel } from "../ex08/ProdutoNaoPerecivel";
import { ProdutoPerecivel } from "../ex08/ProdutoPerecivel";

// Função para exibir informações do produto
function exibirInformacoesProduto(produto: Produto): void {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Código: ${produto.codigo}`);
    console.log(`Preço: ${produto.preco}`);
    console.log(`Quantidade em Estoque: ${produto.quantidadeEmEstoque}`);
    
    if (produto instanceof ProdutoPerecivel) {
      console.log(`Data de Validade: ${produto.dataValidade.toISOString().split('T')[0]}`);
    }
    
    console.log(`Valor Total em Estoque: ${produto.calcularValorTotalEmEstoque().toFixed(2)}`);
    console.log('--------------------------');
  }
  
  // Criando instâncias de ProdutoPerecivel e ProdutoNaoPerecivel
  const leite = new ProdutoPerecivel('Leite', 456, 4.0, 5, new Date('2024-03-01'));
  const arroz = new ProdutoNaoPerecivel('Arroz', 123, 5.0, 10);
  
  // Exibindo as informações iniciais
  exibirInformacoesProduto(leite);
  exibirInformacoesProduto(arroz);
  
  // Adicionando e removendo estoque
  leite.adicionarEstoque(3);
  arroz.removerEstoque(2);
  
  // Exibindo as informações após alterações
  exibirInformacoesProduto(leite);
  exibirInformacoesProduto(arroz);
  