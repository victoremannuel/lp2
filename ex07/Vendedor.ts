class Vendedor implements Funcionario {
    constructor(
        private nome: string,
        private matricula: string,
        private salarioBase: number,
        private comissao: number
    ) {}

    getNome(): string {
        return this.nome;
    }

    getMatricula(): string {
        return this.matricula;
    }

    getSalarioBase(): number {
        return this.salarioBase;
    }

    calculaSalario(): number {
        return this.salarioBase + this.comissao;
    }
}