abstract class AbstractSum3 {
    abstract recursiveSum3(n: number): number;
    abstract recursiveHarmonicSum3(n: number): number;
    abstract recursivePower3(x: number, k: number): number;
}

class Sum3 extends AbstractSum3 {
    recursiveSum3(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : n + this.recursiveSum3(n - 1);
    }

    recursiveHarmonicSum3(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : 1 / n + this.recursiveHarmonicSum3(n - 1);
    }
    
    recursivePower3(x: number, k: number): number {
        if (k < 0) {
            throw new Error("O expoente deve ser um inteiro não negativo.");
        }
        return k === 0 ? 1 : x * this.recursivePower3(x, k - 1);
    }
}

const SumInstance3 = new Sum3();
console.log(SumInstance3.recursiveSum3(5)); 
console.log(SumInstance3.recursiveHarmonicSum3(5)); 
console.log(SumInstance3.recursivePower3(2, 3)); 
