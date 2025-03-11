import { Funcionario } from "./Funcionario";

export class Vendedor extends Funcionario {
    private comissao: number;

    constructor(nome: string, matricula: string, salarioBase: number, comissao: number) {
        super(nome, matricula, salarioBase);
        this.comissao = comissao;
    }

    calculaSalario(): number {
        return this.salarioBase + this.comissao;
    }
}