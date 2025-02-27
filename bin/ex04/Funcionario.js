"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(_nome, _matricula, _salarioBase) {
        this._nome = _nome;
        this._matricula = _matricula;
        this._salarioBase = _salarioBase;
    }
    // Getters e Setters para encapsulamento
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        if (novoNome.trim().length > 0) {
            this._nome = novoNome;
        }
        else {
            console.log("Nome inválido.");
        }
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(novaMatricula) {
        if (novaMatricula.trim().length > 0) {
            this._matricula = novaMatricula;
        }
        else {
            console.log("Matrícula inválida.");
        }
    }
    get salarioBase() {
        return this._salarioBase;
    }
    set salarioBase(novoSalario) {
        if (novoSalario > 0) {
            this._salarioBase = novoSalario;
        }
        else {
            console.log("O salário deve ser maior que zero.");
        }
    }
}
exports.Funcionario = Funcionario;
