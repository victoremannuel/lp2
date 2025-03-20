import { Carro } from "./Carro";

const c1 = new Carro("Chevrolet", "Onix", 2020, "Preto", 60000)
c1.calcularIdade()

console.log('Serializando o objeto c1');
const s = JSON.stringify(c1)
console.log(s)

console.log('\n');

console.log('Deserializando o objeto c1');
const j = JSON.parse(s)
console.log(j)
