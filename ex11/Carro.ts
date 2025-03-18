import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    private tipoCombustivel: string = 'Gasolina';

    abastecer(quantidade: number): void {
        if (quantidade < 0) {
            throw new Error('A quantidade de combustível não pode ser negativa.');
        }
        console.log(`Carro abastecido com ${quantidade} litros de ${this.tipoCombustivel}.`);
    }

    exibirInformacoes(): void {
        console.log(`Modelo: ${this.modelo}\nMarca: ${this.marca}\nAno de Fabricação: ${this.anoFabricacao}\nTipo de Combustível: ${this.tipoCombustivel}\n`);
    }
}