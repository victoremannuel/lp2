abstract class AbstractSum2 {
    abstract recursiveSum2(n: number): number;
    abstract recursiveHarmonicSum2(n: number): number;
}

class Sum2 extends AbstractSum2 {
    recursiveSum2(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : n + this.recursiveSum2(n - 1);
    }

    recursiveHarmonicSum2(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : 1 / n + this.recursiveHarmonicSum2(n - 1);
    }
}

const sumInstance2 = new Sum2();
console.log(sumInstance2.recursiveSum2(5)); 
console.log(sumInstance2.recursiveHarmonicSum2(5)); 
