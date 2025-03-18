import { AlunoIntegrado } from "./AlunoIntegrado";
import { AlunoSuperior } from "./AlunoSuperior";

// Função para gerar número aleatório
function gerarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Caso de uso
let aluno1 = new AlunoIntegrado("12345", "João", "9999-8888");
aluno1.receberNotas();
console.log(`Média do aluno ${aluno1.calcularMedia()}`);

let aluno2 = new AlunoSuperior("67890");
aluno2.receberNotas();
console.log(`Média do aluno superior: ${aluno2.calcularMedia()}`);