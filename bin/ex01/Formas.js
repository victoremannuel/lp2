"use strict";
class Forma {
}
class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    area() {
        return Math.PI * this.raio * this.raio;
    }
    perimetro() {
        return 2 * Math.PI * this.raio;
    }
}
class Retangulo extends Forma {
    constructor(comprimento, largura) {
        super();
        this.comprimento = comprimento;
        this.largura = largura;
    }
    area() {
        return this.comprimento * this.largura;
    }
    perimetro() {
        return 2 * (this.comprimento + this.largura);
    }
}
class Triangulo extends Forma {
    constructor(base, altura, ladoA, ladoB, ladoC) {
        super();
        this.base = base;
        this.altura = altura;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    area() {
        return (this.base * this.altura) / 2;
    }
    perimetro() {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
const circulo = new Circulo(5);
console.log(`Círculo -> Área: ${circulo.area()} | Perímetro: ${circulo.perimetro()}`);
const retangulo = new Retangulo(10, 5);
console.log(`Retângulo -> Área: ${retangulo.area()} | Perímetro: ${retangulo.perimetro()}`);
const triangulo = new Triangulo(6, 4, 3, 4, 5);
console.log(`Triângulo -> Área: ${triangulo.area()} | Perímetro: ${triangulo.perimetro()}`);
