function rangeBitCount(a, b) {
    let c = 0;
    for (var i = a; i <= b; i++) {
        let n = i;
        while (n > 0) {
            if ((n & 1) == 1) {
                c++;
            }
            n >>= 1;
        }
    }
    return c;
}