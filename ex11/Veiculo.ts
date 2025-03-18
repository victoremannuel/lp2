export abstract class Veiculo {
    constructor(
        protected modelo: string,
        protected marca: string,
        protected anoFabricacao: number
    ) {
        if (anoFabricacao > obterAnoAtual()) {
            throw new Error('Ano de fabricação não pode ser maior que o ano atual.');
        }
    }

    abstract abastecer(quantidade: number): void;
    abstract exibirInformacoes(): void;
}

function obterAnoAtual(): number {
    return new Date().getFullYear();
}