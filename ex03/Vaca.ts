import Animal from "./Animal";

export default class Vaca extends Animal {
    emitirSom(som: string): void {
        console.log(som);
        
    }
}