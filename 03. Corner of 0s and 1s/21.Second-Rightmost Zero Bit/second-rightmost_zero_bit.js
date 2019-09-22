function secondRightmostZeroBit(n) {
    return 1 << (n.toString(2).split('').reverse().map((v, i) => {
        if (v == 0) {
            return i;
        }
    }).filter(e => e != null)[1]);
}