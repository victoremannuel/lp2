import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    calculaSalario(): number {
        return this.salarioBase * 2;
    }
}