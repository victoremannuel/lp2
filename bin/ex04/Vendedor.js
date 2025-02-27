"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
const Funcionario_1 = require("./Funcionario");
class Vendedor extends Funcionario_1.Funcionario {
    constructor(nome, matricula, salarioBase, comissao) {
        super(nome, matricula, salarioBase);
        this.comissao = comissao;
    }
    calculaSalario() {
        return this.salarioBase + this.comissao;
    }
}
exports.Vendedor = Vendedor;
