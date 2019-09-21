function mirrorBits(a) {
    let r = '';
    while (a > 0) {
        r += ((a & 1) == 1) ? '1' : '0';
        a >>= 1;
    }
    return parseInt(r, 2);
}