import { Assistente } from "./Assistente";
import { Gerente } from "./Gerente";
import { Vendedor } from "./Vendedor";

function main(): void {
    console.log("Cadastro de funcionários\n");

    // Criando objetos de cada tipo de funcionário
    const gerente = new Gerente("Carlos Silva", "G123", 5000);
    const assistente = new Assistente("Mariana Souza", "A456", 3000);
    const vendedor = new Vendedor("Pedro Lima", "V789", 4000, 1000);

    // Calculando a folha de pagamento
    const totalFolha = gerente.calculaSalario() + assistente.calculaSalario() + vendedor.calculaSalario();

    // Exibindo os salários individuais e o total
    console.log(`Salário do Gerente (${gerente.nome}): R$ ${gerente.calculaSalario().toFixed(2)}`);
    console.log(`Salário do Assistente (${assistente.nome}): R$ ${assistente.calculaSalario().toFixed(2)}`);
    console.log(`Salário do Vendedor (${vendedor.nome}): R$ ${vendedor.calculaSalario().toFixed(2)}`);
    console.log(`\nTotal da Folha Salarial: R$ ${totalFolha.toFixed(2)}`);
}

// Executa o programa
main();