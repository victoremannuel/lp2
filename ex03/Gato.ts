import Animal from "./Animal";

export default class Gato extends Animal {
    emitirSom(som: string): void {
        console.log(som);
        
    }
}