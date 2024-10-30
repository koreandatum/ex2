const permutation = (n,r) => {
    let t = 1;
    let k = n;
    for (let i = 0; i < r; i++) {
        t *= k;
        k--;
    }
    return t;
};

const combination = (n,r) => {
    let t = 1;
    for (let i = 2; i <= r; i++) t *= i;
    return permutation(n,r) / t;
};

const multiPermutation = (n,r) => n ** r;

const multiCombination = (n,r) => combination(n + r - 1, r);

module.exports = {permutation, combination, multiPermutation, multiCombination};