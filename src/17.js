function calculateGCD(a, b) {
    if (!b) return a;
    let remainder = b;
    while (remainder !== 0) {
        [a, remainder] = [remainder, a % remainder];
    }
    return a;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
