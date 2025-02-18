"use strict";
class AbstractSum {
}
class Sum extends AbstractSum {
    recursiveSum4(n) {
        if (n <= 0) {
            throw new Error("O número deve ser um inteiro positivo.");
        }
        return n === 1 ? 1 : n + this.recursiveSum4(n - 1);
    }
}
const sumInstance1 = new Sum();
console.log(sumInstance1.recursiveSum4(5));
