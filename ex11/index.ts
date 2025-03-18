import * as readlineSync from 'readline-sync';
import * as process from "process"

import { Veiculo } from './Veiculo';
import { Carro } from './Carro';
import { Moto } from './Moto';
import { Caminhao } from './Caminhao';

function criarVeiculo(tipo: string): Veiculo {
    const modelo = readlineSync.question(`Digite o modelo do ${tipo}: `);
    const marca = readlineSync.question(`Digite a marca do ${tipo}: `);
    const anoFabricacao = Number(readlineSync.question(`Digite o ano de fabricação do ${tipo}: `));

    try {
        switch (tipo) {
            case 'Carro':
                return new Carro(modelo, marca, anoFabricacao);
            case 'Moto':
                return new Moto(modelo, marca, anoFabricacao);
            case 'Caminhao':
                return new Caminhao(modelo, marca, anoFabricacao);
            default:
                throw new Error('Tipo de veículo inválido.');
        }
    } catch (error) {
        console.error(`Erro ao criar o ${tipo}: ${(error as Error).message}`);
        process.exit(1);
    }
    return {} as Veiculo; // Adicionando um retorno "dummy" para evitar erro TS2366
}


// Criando os veículos
const carro = criarVeiculo('Carro');
const moto = criarVeiculo('Moto');
const caminhao = criarVeiculo('Caminhao');

// Função para abastecer os veículos
function abastecerVeiculo(veiculo: Veiculo, tipo: string): void {
    const quantidade = Number(readlineSync.question(`Digite a quantidade de combustível para abastecer o ${tipo}: `));
    try {
        veiculo.abastecer(quantidade);
    } catch (error) {
        console.error(`Erro ao abastecer o ${tipo}: ${(error as Error).message}`);
        process.exit(1);
    }
}

// Abastecendo os veículos
abastecerVeiculo(carro, 'Carro');
abastecerVeiculo(moto, 'Moto');
abastecerVeiculo(caminhao, 'Caminhao');

// Exibindo as informações dos veículos
console.log('\nInformações dos veículos:\n');
carro.exibirInformacoes();
moto.exibirInformacoes();
caminhao.exibirInformacoes();