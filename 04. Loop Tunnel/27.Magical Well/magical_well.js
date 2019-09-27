function magicalWell(a, b, n) {
    let sum = 0;
    while (n) {
        n--;
        sum += (a + n) * (b + n);
    }
    return sum;
}