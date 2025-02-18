abstract class Forma {
    abstract area(): number;
    abstract perimetro(): number;
}

class Circulo extends Forma {
    constructor(private raio: number) {
        super();
    }

    area(): number {
        return Math.PI * this.raio * this.raio;
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

class Retangulo extends Forma {
    constructor(private comprimento: number, private largura: number) {
        super();
    }

    area(): number {
        return this.comprimento * this.largura;
    }

    perimetro(): number {
        return 2 * (this.comprimento + this.largura);
    }
}

class Triangulo extends Forma {
    constructor(private base: number, private altura: number, private ladoA: number, private ladoB: number, private ladoC: number) {
        super();
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }

    perimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}

const circulo = new Circulo(5);
console.log(`Círculo -> Área: ${circulo.area()} | Perímetro: ${circulo.perimetro()}`);

const retangulo = new Retangulo(10, 5);
console.log(`Retângulo -> Área: ${retangulo.area()} | Perímetro: ${retangulo.perimetro()}`);

const triangulo = new Triangulo(6, 4, 3, 4, 5);
console.log(`Triângulo -> Área: ${triangulo.area()} | Perímetro: ${triangulo.perimetro()}`);