"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assistente = void 0;
const Funcionario_1 = require("./Funcionario");
class Assistente extends Funcionario_1.Funcionario {
    calculaSalario() {
        return this.salarioBase;
    }
}
exports.Assistente = Assistente;
