"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_1 = require("./Funcionario");
class Gerente extends Funcionario_1.Funcionario {
    calculaSalario() {
        return this.salarioBase * 2;
    }
}
exports.Gerente = Gerente;
