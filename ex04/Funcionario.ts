export abstract class Funcionario {
    constructor(
        private _nome: string,
        private _matricula: string,
        protected _salarioBase: number
    ) { }

    // Método abstrato que será implementado nas subclasses
    abstract calculaSalario(): number;

    // Getters e Setters para encapsulamento
    public get nome(): string {
        return this._nome;
    }

    public set nome(novoNome: string) {
        if (novoNome.trim().length > 0) {
            this._nome = novoNome;
        } else {
            console.log("Nome inválido.");
        }
    }

    public get matricula(): string {
        return this._matricula;
    }

    public set matricula(novaMatricula: string) {
        if (novaMatricula.trim().length > 0) {
            this._matricula = novaMatricula;
        } else {
            console.log("Matrícula inválida.");
        }
    }

    public get salarioBase(): number {
        return this._salarioBase;
    }

    public set salarioBase(novoSalario: number) {
        if (novoSalario > 0) {
            this._salarioBase = novoSalario;
        } else {
            console.log("O salário deve ser maior que zero.");
        }
    }
}
