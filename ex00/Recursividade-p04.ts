abstract class AbstractSum4 {
    abstract recursiveSum4(n: number): number;
    abstract recursiveHarmonicSum4(n: number): number;
    abstract recursivePower4(x: number, k: number): number;
    abstract recursiveReverseArray4(arr: number[], start: number, end: number): void;
}

class Sum4 extends AbstractSum {
    recursiveSum4(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : n + this.recursiveSum4(n - 1);
    }

    recursiveHarmonicSum4(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : 1 / n + this.recursiveHarmonicSum4(n - 1);
    }
    
    recursivePower4(x: number, k: number): number {
        if (k < 0) {
            throw new Error("O expoente deve ser um inteiro não negativo.");
        }
        return k === 0 ? 1 : x * this.recursivePower4(x, k - 1);
    }
    
    recursiveReverseArray4(arr: number[], start: number, end: number): void {
        if (start >= end) {
            return;
        }
        [arr[start], arr[end]] = [arr[end], arr[start]];
        this.recursiveReverseArray4(arr, start + 1, end - 1);
    }
}

// Exemplo de uso
const sumInstance41 = new Sum4();
console.log(sumInstance41.recursiveSum4(5)); // Saída: 15
console.log(sumInstance41.recursiveHarmonicSum4(5)); // Saída aproximada: 2.283
console.log(sumInstance41.recursivePower4(2, 3)); // Saída: 8

const arr = [1, 2, 3, 4, 5];
sumInstance41.recursiveReverseArray4(arr, 0, arr.length - 1);
console.log(arr); // Saída: [5, 4, 3, 2, 1]
