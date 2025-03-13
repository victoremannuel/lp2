"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{ }
// Método abstrato que será implementado nas subclasses
abstract;
calculaSalario();
number;
get;
nome();
string;
{
    return this._nome;
}
set;
nome(novoNome, string);
{
    if (novoNome.trim().length > 0) {
        this._nome = novoNome;
    }
    else {
        console.log("Nome inválido.");
    }
}
get;
matricula();
string;
{
    return this._matricula;
}
set;
matricula(novaMatricula, string);
{
    if (novaMatricula.trim().length > 0) {
        this._matricula = novaMatricula;
    }
    else {
        console.log("Matrícula inválida.");
    }
}
get;
salarioBase();
number;
{
    return this._salarioBase;
}
set;
salarioBase(novoSalario, number);
{
    if (novoSalario > 0) {
        this._salarioBase = novoSalario;
    }
    else {
        console.log("O salário deve ser maior que zero.");
    }
}
