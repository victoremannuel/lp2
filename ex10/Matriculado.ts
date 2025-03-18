export abstract class Matriculado {
    protected matricula: string;
    protected notas: number[];

    constructor(matricula: string, numeroDeNotas: number) {
        this.matricula = matricula;
        this.notas = new Array(numeroDeNotas).fill(0);
    }

    abstract calcularMedia(): number;
}