// Завдання 1
function displayOneToN(n) {
    if (n < 1) return;
    displayOneToN(n - 1);
    console.log(n);
}

// Завдання 2
function displayRangeAToB(a, b) {
    console.log(a);
    if (a === b) return;
    if (a < b) {
        displayRangeAToB(a + 1, b);
    } else {
        displayRangeAToB(a - 1, b);
    }
}

// Завдання 3
function checkPowerOfTwo(n) {
    if (n === 1) return "YES";
    if (n <= 0 || n % 2 !== 0) return "NO";
    return checkPowerOfTwo(Math.floor(n / 2));
}

// Завдання 4
function calculateDigitSum(n) {
    if (n < 10) return n;
    return (n % 10) + calculateDigitSum(Math.floor(n / 10));
}

// Завдання 5
function displayDigitsReversed(n) {
    if (n === 0) return;
    console.log(n % 10);
    displayDigitsReversed(Math.floor(n / 10));
}

// Завдання 6
function displayDigitsDirect(n) {
    if (n < 10) {
        console.log(n);
        return;
    }
    displayDigitsDirect(Math.floor(n / 10));
    console.log(n % 10);
}

console.log(checkPowerOfTwo(9));
