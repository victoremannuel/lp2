export abstract class Matriculado {
    constructor (
        matricula : string,
        notas : number[]
    ) {}

    abstract calcularMedia() : number
}