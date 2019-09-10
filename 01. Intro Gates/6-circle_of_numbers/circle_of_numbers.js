function circleOfNumbers(n, firstNumber) {
    let r = n / 2 + firstNumber;
    return r >= n ? r - n : r;
}