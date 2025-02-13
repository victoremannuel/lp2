abstract class AbstractSum {
    abstract recursiveSum(n: number): number;
}

class Sum extends AbstractSum {
    recursiveSum(n: number): number {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : n + this.recursiveSum(n - 1);
    }
}

const sumInstance1 = new Sum();
console.log(sumInstance1.recursiveSum(5));