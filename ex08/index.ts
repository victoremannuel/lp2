import { ProdutoNaoPerecivel } from "./ProdutoNaoPerecivel";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

const produtoPerecivel1 = new ProdutoPerecivel('iogurte', 1,4.99,10,new Date())
const produtoNaoPerecivel1 = new ProdutoNaoPerecivel('arroz', 2, 20.99, 10)

produtoPerecivel1.adicionarEstoque(1)
produtoNaoPerecivel1.adicionarEstoque(1)

produtoPerecivel1.calcularValorTotalEmEstoque()
produtoNaoPerecivel1.calcularValorTotalEmEstoque()

produtoPerecivel1.removerEstoque(2)
produtoNaoPerecivel1.removerEstoque(2)

produtoPerecivel1.calcularValorTotalEmEstoque()
produtoNaoPerecivel1.calcularValorTotalEmEstoque()

produtoPerecivel1.detalhesDoProduto()
produtoNaoPerecivel1.detalhesDoProduto()