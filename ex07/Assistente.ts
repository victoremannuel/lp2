import { Funcionario } from "./Funcionario";

export class Assistente extends Funcionario {
    calculaSalario(): number {
        return this.salarioBase;
    }
}