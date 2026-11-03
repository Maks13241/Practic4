// Завдання 1
function print1ToN(n) {
    if (n < 1) return;
    print1ToN(n - 1);
    console.log(n);
}

// Завдання 2
function printAToB(a, b) {
    console.log(a);
    if (a === b) return;
    if (a < b) {
        printAToB(a + 1, b);
    } else {
        printAToB(a - 1, b);
    }
}

// Завдання 3
function isPowerOfTwo(n) {
    if (n === 1) return "YES";
    if (n <= 0 || n % 2 !== 0) return "NO";
    return isPowerOfTwo(Math.floor(n / 2));
}

// Завдання 4
function sumDigits(n) {
    if (n < 10) return n;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

// Завдання 5
function printDigitsReversed(n) {
    if (n === 0) return;
    console.log(n % 10);
    printDigitsReversed(Math.floor(n / 10));
}

// Завдання 6
function printDigitsDirect(n) {
    if (n < 10) {
        console.log(n);
        return;
    }
    printDigitsDirect(Math.floor(n / 10));
    console.log(n % 10);
}

console.log(isPowerOfTwo(9))
