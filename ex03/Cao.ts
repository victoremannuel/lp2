import Animal from "./Animal";

export default class Cao extends Animal {
    emitirSom (som: string) :void {
        console.log(som);
    }
}