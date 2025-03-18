const funcionarios: Funcionario[] = [
    new Gerente("Carlos Silva", "001", 5000),
    new Assistente("Ana Souza", "002", 3000),
    new Vendedor("Marcos Lima", "003", 4000, 1000)
];

let folhaPagamentoTotal = 0;

funcionarios.forEach(funcionario => {
    const salario = funcionario.calculaSalario();
    console.log(`Funcionário: ${funcionario.getNome()}, Salário: R$ ${salario.toFixed(2)}`);
    folhaPagamentoTotal += salario;
});

console.log(`\nFolha de pagamento total: R$ ${folhaPagamentoTotal.toFixed(2)}`);