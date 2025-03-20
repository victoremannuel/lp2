export class Carro {
    marca: string
    modelo: string
    anoFabricacao: number
    cor: string
    preco: number

    constructor(
        marca: string,
        modelo: string,
        anoFabricacao: number,
        cor: string,
        preco: number,
    ) {
        this.marca = marca
        this.modelo = modelo
        this.anoFabricacao = anoFabricacao
        this.cor = cor
        this.preco = preco
    }

    calcularIdade(): void {
        const anoAtual : number = new Date().getFullYear()
        const idade : number = anoAtual - this.anoFabricacao
        console.log(`O carro tem ${idade} anos de idade.`)
    }
}